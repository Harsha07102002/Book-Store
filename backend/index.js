import express from "express"
import {PORT,mongoDBURL} from "./config.js"
import mongoose  from "mongoose"
import booksRoute from "./routes/bookRoutes.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
app.use('/books',booksRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})



app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
