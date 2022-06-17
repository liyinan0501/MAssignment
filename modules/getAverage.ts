import { Request, Response } from 'express'
import dataArray from '../modules/dataArray'
import dataPath from './dataPath'
import IMeasurement from '../Interfaces/Measurement'

async function getAverage(req: Request, res: Response): Promise<void> {
  // calculate Average of requested property according to filters
  // Example query: http://localhost:3000/get-average/scoreA
  const property = req.params.pro
  const average: number =
    dataArray
      .map((item: any) => item.properties[property])
      .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0) /
    dataArray.length

  console.log(average)

  // const fs = require('fs')
  // const JSONStream = require('JSONStream')
  // let sum: number = 0
  // let count: number = 0
  // const readable = fs.createReadStream(dataPath, {
  //   encoding: 'utf8',
  //   highWaterMark: 10,
  // })
  // const parser = JSONStream.parse('.')
  // readable.pipe(parser)
  // parser.on('data', function (data: any) {
  //   // sum += data.properties[property]
  //   // count += 1
  //   console.log(data.properties[property])
  // })
  // console.log(count)
}

export default getAverage
