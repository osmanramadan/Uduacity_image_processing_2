"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images_1 = __importDefault(require("./images"));
var routes = express_1.default.Router();
routes.use('/api/images', images_1.default);
routes.get('/', function (request, response) {
    response.send("<h1>image-processing-api</h1><p>Listening at\n       <code><a href=\"/api/images\">/api/images</a></code><br>\n       <ul>\n       <li>\n         <a href=\"/api/images?filename=fjord\">\n         /api/images?filename=fjord\n         </a>\n       </li>\n       <li>\n         <a href=\"/api/images?filename=fjord&width=100&height=100\">\n         /api/images?filename=fjord&width=100&height=100\n         </a>\n       </li>\n       </ul>\n         ");
});
exports.default = routes;
