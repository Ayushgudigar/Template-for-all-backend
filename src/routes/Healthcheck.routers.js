import {Router} from 'express'
import {HealthCheck} from '../controllers/Healthcheck.controller.js'

const router=Router()

router.route("/").get(HealthCheck) 
// router.route("/instagram").get(HealthCheck)

export default router;