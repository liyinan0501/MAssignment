import { Request, Response } from 'express'
import dataPath from './dataPath'
import IMeasurement from '../Interfaces/Measurement'

async function getData(req: Request, res: Response): Promise<void> {
  // Retrieve Data
  // Example query: http://localhost:3000/get-data
  const fs = require('fs')
  const JSONStream = require('JSONStream')
  const readable = fs.createReadStream(dataPath, {
    encoding: 'utf8',
    highWaterMark: 10,
  })
  const parser = JSONStream.parse('.')
  readable.pipe(parser)
  parser.on('data', function (data: IMeasurement) {
    console.log(data)
  })
}

export default getData
