"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/users', user_1.default);
app.get('/', (req, res) => {
    res.send('Simple Prisma + TypeScript API');
});
// Export for Netlify Functions
exports.handler = (0, serverless_http_1.default)(app);
