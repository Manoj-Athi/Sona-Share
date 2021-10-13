import express from "express";

import { createDiscussion, getAllDiscussion, joinDiscussion } from "../controllers/discussions.js"
import auth from '../middleware/auth.js'

const router = express.Router();

router.get('/get/:id', getAllDiscussion);
router.post('/create', auth, createDiscussion);
router.patch('/join', auth, joinDiscussion);

export default router