const Koa = require('koa');
const app = new Koa();
const fs = require("fs");
const cors = require('koa2-cors');
const static_ = require('koa-static');
const staticPath = './dist';
const exec = require("child_process");
const path = require("path");
const http = require('http');

app.use(static_(
    path.join(__dirname, staticPath)
));
app.use(cors());

app.use(async (ctx) => {
    if (ctx.url === '/code' && ctx.method === 'POST') {
        const post = await parsePostData(ctx);
        const json = JSON.parse(post);
        value = getJsonValue(json, "code");
        if (value) {
            fs.writeFileSync("./code.java", value, 'utf8');
            const code_path = __dirname + "/code.java";
            const parser = path.join(__dirname, "java-parser", "parser.jar");
            console.log(parser);

            // console.log(ast_json);

            try {
                ctx.set("Access-Control-Allow-Headers", "X-Requested-With");
                ctx.set("Access-Control-Allow-Origin", "*");
                const ast_json = exec.execSync(`java -jar ${parser} ${code_path}`).toString();
                if(ast_json === "error") {
                    // console.log(1);
                    ctx.body = {"0": ["code error"]};
                } else {
                    // console.log(ast_json);
                    ctx.body = JSON.parse(ast_json);
                }
            } catch (e) {
                ctx.set("Access-Control-Allow-Origin", "http://localhost:8081");
                ctx.body = {"0": ["code error"]};
            }
        } else {
            ctx.set("Access-Control-Allow-Origin", "http://localhost:8081");
            ctx.body = '404';
        }

    }
})

function getJsonValue(obj, name) {
    var result = null;
    var value = null;
    for (var key in obj) {
        value = obj[key];
        if (key === name) {
            //console.log("getjsonvalue:" + value)
            return value;
        } else {
            if (typeof value == "object") {
                result = getJsonValue(value, name);
            } else {
                result = null;
            }
        }
    }
    return result;
}

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.addListener('data', (data) => {
                postdata += data
            })
            ctx.req.addListener("end", function () {
                resolve(postdata)
            })
        } catch (err) {
            reject(err)
        }
    })
}

http.createServer(app.callback())
    .listen(8989)
    .on('listening', function () {
        console.log(`服务已开启，端口：8989`)
    });
