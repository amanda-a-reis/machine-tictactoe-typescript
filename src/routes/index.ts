import express from 'express'
import game from '../controllers'
import { generateCombinations } from '../controllers/game/tools/generate-combinations'

const router = express.Router()

router.post('/game', game)

export default router
