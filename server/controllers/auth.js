import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import user from "../models/user.js"

export const login = async ( req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email });
        if(!existingUser){
            return res.status(404).json({ message: "User dosen't Exist."});
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordCrt){
            return res.status(400).json("Invalid credentials.");
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, "test", { expiresIn: "1h"});
        res.status(200).json({ result: existingUser, token});

    } catch (error) {
        res.status(500).json("Something went wrong.");
    }
}

export const signup = async ( req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await user.findOne({ email });
        if(existingUser){
            return res.status(404).json({ message: "User already Exist."});
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await user.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ email: newUser.email, id: newUser._id}, "test", { expiresIn: "1h"});
        res.status(200).json({ result: newUser, token});

    } catch (error) {
        res.status(500).json("Something went wrong.");
    }
}