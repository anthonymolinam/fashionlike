'use strict'

import { Router } from 'express'
import * as userCtrl from '../controllers/user.ctrl.js'

const router = Router()

router.post('/login', userCtrl.login)
router.post('/signup', userCtrl.signup)

export default router;