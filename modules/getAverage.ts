import { Request, Response } from 'express'
import IMeasurement from '../Interfaces/Measurement'
import dataArray from '../modules/dataArray'
import dataPath from './dataPath'

async function getAverage(req: Request, res: Response): Promise<void> {
  // calculate Average of requested property according to filters
  //* Example query: http://localhost:3000/get-average/scoreA
  const property = req.params.pro
  // const average: number =
  //   dataArray
  //     .map((item: any) => item.properties[property])
  //     .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0) /
  //   dataArray.length
  // console.log(average) // 49976.86384

  const fs = require('fs')
  const JSONStream = require('JSONStream')
  const readable = fs.createReadStream(dataPath, {
    encoding: 'utf8',
  })
  const parser = JSONStream.parse('.')
  readable.pipe(parser)
  let sum = 0
  let count = 0
  let average = 0
  parser.on('data', (data: any) => {
    sum += data.properties[property]
    count += 1
    average = sum / count
    console.log(`Current Average: ${average}`)
  })
}

export default getAverage
