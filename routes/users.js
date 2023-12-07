import express from "express";

import { createUser, deleteUser,findUser, getUser, updateUser, userLogin } from "../controllers/user.js";

const router=express.Router();

router.get('/',getUser);

router.post('/',createUser);

router.get('/:id',findUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

router.post('/login',userLogin);

export default router