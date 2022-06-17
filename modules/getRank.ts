import { Request, Response } from 'express'

async function getRank(req: Request, res: Response): Promise<void> {
  // Rank top 10 records
  // Example query: http://localhost:3000/get-rank?param=scoreA&itemNo=2
  console.log(req.query)
}

export default getRank
