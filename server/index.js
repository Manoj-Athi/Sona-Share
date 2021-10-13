import express from "express";
import mongoose  from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import discussionRoutes from './routes/discussions.js';

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/auth', authRoutes)
app.use('/discussion', discussionRoutes)

const DATABASE_URL = 'mongodb+srv://admin:admin@sona-share.k4qil.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`Server running on ${PORT}`)}))
    .catch((err) => console.log(err.message));