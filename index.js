const { json } = require("express");
const express  = require("express");
const cors = require("cors");

const app = express();


const PORT = 8080;

const rootRouter = require('./src/routes')

app.use(cors());
app.use(json())

app.use('/api',rootRouter)

app.listen(PORT, function(){
    console.log("Run server successfully on " + PORT)
})