require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = require("./routers/auth-router");
const routers = require("./routers/admin-router")
const dbConnect = require("./connection/connection");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
app.use(cors());

const corsOptions  = {
    origin: "http://localhost:3003",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };


app.use(express.json());
app.use("/api",router);
app.use("/api/admin",routers);

app.use(errorMiddleware);

const port = 5000 ;
dbConnect().then(()=>{app.listen(port, ()=>{
    console.log(`server is running : http://localhost:${port}/api`);
    });
});
