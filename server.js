import { createServer } from 'http';
const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world!');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);

});