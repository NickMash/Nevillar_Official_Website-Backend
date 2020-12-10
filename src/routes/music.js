import express from 'express';
import Music from "../controllers/musicController"

const router = express.Router();

router.get('/getMusicList', Music.getMusicList);


export default router;