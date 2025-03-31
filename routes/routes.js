import * as Controller from '../controllers/controllers.js';
import express from 'express';

const router = express.Router();

router.get('/', Controller.getAllWizzard);

router.get('/:id', Controller.getWizzardById);

router.post('/', Controller.createWizzard);

router.put('/:id', Controller.updateWizzard);

router.delete('/:id', Controller.deleteWizzard);

export default router;