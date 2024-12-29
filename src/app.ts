import express, { NextFunction, Request, Response } from 'express';
const app = express();

// parsers
app.use(express.json());
app.use(express.text());

// Middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.url);
    next();
}

app.get('/',logger, (req : Request, res: Response)=>{
    res.send('Hello World!');
})

app.post('/',logger, (req: Request, res: Response)=>{
    console.log(req.body);
    res.send('POST request received!');
})

export default app;