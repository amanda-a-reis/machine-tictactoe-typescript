import easy from './game/levels/easy'
import medium from './game/levels/medium'
import { makeMoviment } from './game/tools/make-moviment'

const game = (req, res): void => {
  try {
    const { mode, user, machine } = req.body

    if (mode === 'easy') {
      res.status(200).json(makeMoviment('easy', user, machine))
    }
    if (mode === 'medium') {
      res.status(200).json(makeMoviment('medium', user, machine))
    }
    if (mode === 'hard') {
      res.status(200).json(makeMoviment('hard', user, machine))
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export default game
