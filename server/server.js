const Koa = require('koa');
const app = new Koa();
const fs = require("fs");
const cors = require('koa2-cors');
const static_ = require('koa-static');
const staticPath = './dist';
const path = require("path");

app.use(static_(
    path.join(__dirname, staticPath)
));
app.use(cors());
