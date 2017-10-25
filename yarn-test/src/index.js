const Koa = require('koa');
const app = new Koa();

require('dotenv').config();

const {
    PORT: port
} = process.env;

app.use(ctx => {
    console.log("hello world");
});

app.listen(port, () => {
    console.log(`world server is listening to port ${port}`);
});
