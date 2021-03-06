import { Request, Response } from 'express'
import IMeasurement from '../Interfaces/Measurement'
import dataArray from '../modules/dataArray'
import dataPath from './dataPath'

async function getAverage(req: Request, res: Response): Promise<void> {
  // calculate Average of requested property according to filters
  //* Example query: http://localhost:3000/get-average/scoreA

  const property = req.params.pro

  //* Solution 1 - Using array methods
  // Advantage:
  // Using array methods solution for solving 1M.json is much faster than using the stream.
  // Disadvantage:
  // Using array methods can not solve over 2 GB file.

  // const average: number =
  //   dataArray
  //     .map((item: any) => item.properties[property])
  //     .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0) /
  //   dataArray.length
  // console.log(average)
  // 1M.json:49976.86384

  //* Solution 2 - Using stream
  // Advantage:
  // Using stream can solve 10M.json.
  // Disadvantage:
  // Using the stream solution for solving 1M.json is much slower than using array methods.
  const fs = require('fs')
  const JSONStream = require('JSONStream')
  const readable = fs.createReadStream(dataPath, {
    encoding: 'utf8',
  })
  let sum = 0,
    count = 0,
    average = 0
  const parser = JSONStream.parse('.')
  readable
    .on('end', () => {
      average = sum / count
      res.send(`${property} Average: ${average}`)
      // 1M.json:49976.86384
      // 10M.json: 49998.830288
    })
    .pipe(parser)

  parser.on('data', function (data: IMeasurement) {
    sum += (data.properties as any)[property]
    count += 1
  })
}

export default getAverage
