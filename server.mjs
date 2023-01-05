import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  res.sendFile(__dirname+"/index.html");
  res.end();
}).listen(process.env.PORT);
