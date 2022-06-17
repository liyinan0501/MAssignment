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
}

export default getAverage
