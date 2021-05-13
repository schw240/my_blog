// // server.js
// // const express = require('express');
// // const app = express();
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cors());
// // app.use(bodyParser.json());

// // app.post('/text', (req, res) => {
// //   const text = req.body.name;
// //   console.log(text);
// // });




// // api/index.js
// // const awsServerlessExpress = require('aws-serverless-express')
// // const express = require('express')
// // const v1 = require('./v1')      // 추가
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(cors());
// // app.use(bodyParser.json());
// // const app = express()
// // app.use(express.json())
// // app.use('/api/v1', v1)          // 추가


// // app.listen(port, () => {
// //     console.log(`Example app listening at http://localhost:${port}`);
// //   });
//   // export default function blog(req, res) {
//   //   const hello = [
//   //     {
//   //       id: 1,
//   //       name: 'hanju',
//   //     },
//   //     {
//   //       id: 2,
//   //       name: 'jungwoo',
//   //     },
//   //     {
//   //       id: 3,
//   //       name: 'guentae',
//   //     }
//   //   ]
//   //   res.status(200).json(hello)
//   // }

// // const server = awsServerlessExpress.createServer(app)

// // exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)


// // const awsServerlessExpress = require('aws-serverless-express')
// // const express = require('express')
// // const db = require('./db')      

// // const app = express()
// // app.use(express.json())
// // app.use('/api/db', db)          

// // const server = awsServerlessExpress.createServer(app)

// // exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)

// // const express = require('express');
// // const cors = require('cors');
// // // const bodyParser = require("body-parser");
// // // const mysql = require('mysql');
// // // const db = require("./db/index");
// // const app = express()
// // app.use(express.json())

// // // app.use('/db', db)
// // // const getRoute = require("./test/index");

// // app.set('port', process.env.PORT || 3000);

// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));


// // // app.get('/api/isers', (req, res) => {
// // //   db.connection.query('SELECT * from HJ_BLOG', (err, results) => {
// // //     if (err) throw error;
// // //     console.log('User info is: ', results);
// // //     res.send(results);
// // //   });
// // // });

// // app.listen(app.get('port'), () => {
// //   console.log('Express server listening on port ' + app.get('port'));
// // });

// // // app.use(getRoute);

// const express = require('express')
// const next = require('next')
// const mysql = require("mysql");

// let connection = mysql.createConnection({
//     host: "pkk-blogs.cuwex8kz3bin.ap-northeast-2.rds.amazonaws.com",
//     port: "3306",
//     user: "admin",
//     password: "pkkjhg12!",
//     database: "pkk_blog",
//   });

// connection.connect();

// const port = parseInt(process.env.PORT, 10) || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.use(express.json({limit: '50mb'}))
//   server.use(express.urlencoded({ limit: '50mb', extended: true }))

//   server.listen(port, (err) => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })

//   server.get('http://localhost:3000/api', (req, res) => {
//     console.log(req)
//     connection.query('SELECT * from HJ_BLOG', (err, results) => {
//       if (err) throw error;
//       console.log('User info is: ', results);
//       res.send(results);
//     });
//   });
// })