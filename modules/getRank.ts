import { Request, Response } from 'express'
import dataArray from '../modules/dataArray'

async function getRank(req: Request, res: Response): Promise<void> {
  // Rank top 10 records
  // Example query: http://localhost:3000/get-rank?param=scoreA&itemNo=2
  const property: string = String(req.query.param)
  const itemNo: number = parseInt(req.query.itemNo as string)
  const deviceNames: Array<string> = ['Ios', 'Android']

  // console.log(typeof property)
  // const property = 'scoreA'
  const newArray = dataArray
    .filter((item: any) => item.deviceProps.type === deviceNames[itemNo - 1])
    .map((item: any) => item.properties[property])
  // console.log(typeof itemNo) // number
  // console.log(itemNo - 1) // NaN
  console.log(newArray)
}

export default getRank
