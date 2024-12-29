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



// Router
const userRouter = express.Router();
const courseRouter = express.Router();

app.use('/api/v1/users', userRouter);
userRouter.post('/create-user', (req: Request, res: Response)=>{
    const user = req.body;
    console.log(user);
    res.json({ 
        status: 201,  // HTTP status code for success
        success: true,  // true if the request was successful
        data: user,  // the created user
        message: 'User created successfully!',
    });
})


app.use('/api/v1/courses', courseRouter);

courseRouter.post('/create-course', (req: Request, res: Response)=>{
    const course = req.body;
    console.log(course);
    res.json({
        status: 201,  // HTTP status code for success
        success: true,  // true if the request was successful
        data: course,  // the created course
        message: 'Course created successfully!',
    })
})



app.get('/',logger, (req : Request, res: Response)=>{
    res.send('Hello World!');
})

app.post('/',logger, (req: Request, res: Response)=>{
    console.log(req.body);
    res.send('POST request received!');
})

export default app;