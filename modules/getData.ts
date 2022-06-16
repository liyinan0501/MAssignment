import { Request, Response } from 'express'
import data from './data'

async function getData(req: Request, res: Response): Promise<void> {
  // Retrieve Data
  res.send(data)
}

export default getData
