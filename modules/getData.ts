import { Request, Response } from 'express'
import dataPath from './dataPath'
import IMeasurement from '../Interfaces/Measurement'

async function getData(req: Request, res: Response): Promise<void> {
  // Retrieve Data
  const bfj = require('bfj')
  const fs = require('fs')
  bfj
    .parse(fs.createReadStream(dataPath))
    .then((data: IMeasurement) => {
      // :)
      res.send(data)
    })
    .catch((error: any) => {
      // :(
    })
}

export default getData
