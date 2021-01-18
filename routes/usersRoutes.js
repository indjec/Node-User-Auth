import express from 'express'
import {registerUser, authUser, updateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').put(protect, updateUserProfile)

export default router