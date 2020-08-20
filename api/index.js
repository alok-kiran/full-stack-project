import express from 'express'
const router = express.Router()
import data from '../src/components/TestData.json'

router.get('/contests', (req, res)=>{
  res.send({
    contests: data.contests
  })
})

export default router;