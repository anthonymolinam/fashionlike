'use strict'

import { Router } from 'express'
import * as userCtrl from '../controllers/user.ctrl.js'

const router = Router()
// user Authentication
router.post('/login', userCtrl.login)
    .post('/signup', userCtrl.signup)

export default router;