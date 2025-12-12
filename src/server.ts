import express, { Request, Response } from "express"

const app = express()
app.use(express.json());


initDB()








app.post("/users", async(req:Request, res:Response) =>{
    const body = req.body;
})

app.get('/', (req:Request, res:Response) =>{
    res.status(200).json({
        message:"this is the root route",
        path:req.path
    })
})

app.listen(5000,() =>{
    console.log("Server is running on post 5000")
})