import { Request, Response } from 'express'

async function getAverage(req: Request, res: Response): Promise<void> {
  // calculate Average of requested property according to filters
  // npx nodemon index.ts
  const property = req.params.pro
  console.log(property)
  let property1: string = req.params.pro
  console.log(property1)
  // const average: number = data.map()
}

export default getAverage
