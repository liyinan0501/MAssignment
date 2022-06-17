import { Request, Response } from 'express'
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

  const newArray = dataArray
    .filter(
      (item: IMeasurement) => item.deviceProps.type === DeviceNames[itemNo]
    )
    .map((item: any) => item.properties[property])

  const getMaxes = (input: Array<number>, count: number) => {
    let output: Array<number> = []
    for (let i = 0; i < input.length; i++) {
      output.push(input[i])
      if (output.length > count) {
        output.sort((a, b) => b - a)
        output.pop()
      }
    }
    return output
  }
  console.log(`Top 10: ${getMaxes(newArray, 10)}`) // hoisting
}

export default getRank
