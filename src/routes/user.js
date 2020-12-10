import express from 'express';
import User from "../controllers/userController";

const router = express.Router();

router.get('/isUserExist', User.isUserExist);
router.post('/saveRegPersonData', User.saveRegPersonData);
router.put('/changePersonData', User.changePersonData);


export default router;
