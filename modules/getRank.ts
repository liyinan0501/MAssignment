import { Request, Response } from 'express'
import dataArray from '../modules/dataArray'

async function getRank(req: Request, res: Response): Promise<void> {
  // Rank top 10 records
  //* Example query: http://localhost:3000/get-rank?param=scoreA&itemNo=2
  const property = String(req.query.param)
  const itemNo = parseInt(req.query.itemNo as string)
  const deviceNames: Array<string> = ['Ios', 'Android']

  const newArray = dataArray
    .filter((item: any) => item.deviceProps.type === deviceNames[itemNo - 1])
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
  console.log(getMaxes(newArray, 100)) // hoisting
}

export default getRank
