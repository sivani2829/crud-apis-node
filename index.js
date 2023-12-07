import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';

const app=express();
const port=5000;


app.use(bodyParser.json())

app.use('/users',userRoutes)

app.get('/',(req,res)=>{
    console.log('test!')
    res.send('hello from homepage')
})
app.listen(port,()=>console.log(`server running at http://localhost:${port}`));