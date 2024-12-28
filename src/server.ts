import { Server } from "http";
import app from "./app";

const PORT = 3000;

let server : Server;

async function startServer() {
    server = app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}

startServer();
