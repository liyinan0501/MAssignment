import { Request, Response } from 'express'
import dataPath from './dataPath'
import dataArray from '../modules/dataArray'
import IMeasurement from '../Interfaces/Measurement'

async function getRank(req: Request, res: Response): Promise<void> {
  // Rank top 10 records
  //* Example query: http://localhost:3000/get-rank?param=scoreA&itemNo=2
  const property = String(req.query.param)
  const itemNo = parseInt(req.query.itemNo as string)

  enum DeviceNames {
    Ios = 1,
    Android,
  }

  //* Solution 1 - Using array methods
  // Advantage:
  // Using array methods solution for solving 1M.json is much faster than using the stream.
  // Disadvantage:
  // Using array methods can not solve over 2 GB file.

  // const newArray = dataArray
  //   .filter(
  //     (item: IMeasurement) => item.deviceProps.type === DeviceNames[itemNo]
  //   )
  //   .map((item: any) => item.properties[property])
  // console.log(`Top 10: ${getMaxes(newArray, 10)}`)
  // 1M.json: 99999,99999,99999,99999,99999,99998,99998,99998,99998,99998 (≈ under 1 second)

  // function getMaxes(input: Array<number>, count: number) {
  //   let output: Array<number> = []
  //   for (let i = 0; i < input.length; i++) {
  //     output.push(input[i])
  //     if (output.length > count) {
  //       output.sort((a, b) => b - a)
  //       output.pop()
  //     }
  //   }
  //   return output
  // }

  //* Solution 2 - Using stream
  // Advantage:
  // Using stream can solve 10M.json.
  // Disadvantage:
  // Using the stream solution for solving 1M.json is much slower than using array methods.

  let rankArray = new Array(10).fill(0)
  const fs = require('fs')
  const JSONStream = require('JSONStream')
  const readable = fs.createReadStream(dataPath, {
    encoding: 'utf8',
    // highWaterMark:
  })
  const parser = JSONStream.parse('.')
  readable
    .on('end', () => {
      res.send(rankArray)
      // 1M.json: 99999,99999,99999,99999,99999,99998,99998,99998,99998,99998
      // 10M.json: 99999,99999,99999,99999,99999,99999,99999,99999,99999,99999
    })
    .pipe(parser)

  parser.on('data', (data: IMeasurement) => {
    if (data.deviceProps.type === DeviceNames[itemNo]) {
      rankArray.sort((a, b) => b - a)
      if (
        (data.properties as any)[property] > rankArray[rankArray.length - 1]
      ) {
        rankArray[rankArray.length - 1] = (data.properties as any)[property]
      }
    }
  })
}

export default getRank
