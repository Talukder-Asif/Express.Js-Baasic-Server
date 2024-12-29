"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// Middleware
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        status: 201, // HTTP status code for success
        success: true, // true if the request was successful
        data: user, // the created user
        message: 'User created successfully!',
    });
});
app.use('/api/v1/courses', courseRouter);
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        status: 201, // HTTP status code for success
        success: true, // true if the request was successful
        data: course, // the created course
        message: 'Course created successfully!',
    });
});
app.get('/', logger, (req, res) => {
    res.send('Hello World!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('POST request received!');
});
exports.default = app;
