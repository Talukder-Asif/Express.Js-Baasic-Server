"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.use("/api/v1/users", userRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        status: 201, // HTTP status code for success
        success: true, // true if the request was successful
        data: user, // the created user
        message: "User created successfully!",
    });
});
app.use("/api/v1/courses", courseRouter);
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        status: 201, // HTTP status code for success
        success: true, // true if the request was successful
        data: course, // the created course
        message: "Course created successfully!",
    });
});
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("Hello World!");
    }
    catch (err) {
        next(err);
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send("POST request received!");
});
// route nai error
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found",
        data: null,
    });
});
// global error handaller
app.use((error, req, resizeBy, next) => {
    if (error) {
        resizeBy.status(400).json({
            success: false,
            message: "Something went wrong",
            data: null,
        });
    }
});
exports.default = app;
