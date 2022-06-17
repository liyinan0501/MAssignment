import { Request, Response } from 'express'
import dataPath from './dataPath'
import IMeasurement from '../Interfaces/Measurement'

async function getData(req: Request, res: Response): Promise<void> {
  // Retrieve Data
  //* Example query: http://localhost:3000/get-data
  //* Example query: http://localhost:3000/get-data/2022-06-04T17:58:53.589Z
  const fs = require('fs')
  const JSONStream = require('JSONStream')
  const readable = fs.createReadStream(dataPath, {
    encoding: 'utf8',
  })
  const parser = JSONStream.parse('.')
  readable.pipe(parser)
  const date: undefined | string = req.params.date
  const reg = /^\d{4}-\d{1,2}-\d{1,2}/

  if (date) {
    const regDate: any = date.match(reg)
    parser.on('data', (data: IMeasurement) => {
      if (data['timestamp'].includes(regDate)) {
        console.log(data)
      }
    })
  } else {
    parser.on('data', (data: IMeasurement) => console.log(data))
  }
}

export default getData
