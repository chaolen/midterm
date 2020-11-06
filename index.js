import miniExpress from './mini-express.js';
import pg from 'pg';


const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
    database: 'midterm-database',
  password: 'chacha234'
})


const app = miniExpress();
let db;


pool.connect((error, client) => {
    db = client;
    app.listen(3000, () => {
        console.log('Server has Started: ctrl + click http://localhost:3000')
    })
})


app.get('/', (request, response) => {
    db.query('SELECT * FROM organization', (error, results) => {
        if (error) {
            response.writeHead(500);
            response.end('SOMETHING WENT WRONG:' + error)
        } else {

            const { rows : students } = results;
            let textHtml = '';
            for (const student of students) {
                textHtml += ` 
                <div> ${student.org_name}  </div> 
                `
             }

            response.writeHead(200, {
                'Context-Type' : 'text/html'
            })


            response.end(
                `
                <html>
                    <head>
                        <title>Document</title>
                        <style>
                            body {
                                font-family: sans-serif;
                                margin-left:60px;
                                margin-right:60px;

                            }

                            h1 {
                                color: maroon;
                                margin-left: 40px;
                                text-align: center;
                            }
                            div {
                                border: 2px solid blue;
                                border-radius: 25px;
                                font-size: 16px;
                                margin-left:60px;
                                margin-right:60px;
                                margin-bottom:5px;
                                height: 30px;
                                text-align: center;
                                padding-top: 3px;
                            }

                            </style>
                    </head>
                    <body>
                        <h1> THESE ARE THE ORGANIZATION </h1>
                       ${textHtml} 
                    </body>
                </html>
                `
            )
       }
   })
})




app.get('/page2', (request, response) => {
    db.query('SELECT * FROM organization', (error, results) => {
        if (error) {
            response.writeHead(500);
            response.end('SOMETHING WENT WRONG:' + error)
        } else {

            const { rows : students } = results;
            let textHtml = '';
            for (const student of students) {
                textHtml += ` 
                <div> ${student.org_name}  </div> 
                `
             }

            response.writeHead(200, {
                'Context-Type' : 'text/html'
            })


            response.end(
                `
                <html>
                    <head>
                        <title>Document</title>
                        <style>
                            body {
                                font-family: sans-serif;
                                margin-left:60px;
                                margin-right:60px;

                            }

                            h1 {
                                color: maroon;
                                margin-left: 40px;
                                text-align: center;
                            }
                            div {
                                border: 2px solid blue;
                                border-radius: 25px;
                                font-size: 16px;
                                margin-left:60px;
                                margin-right:60px;
                                margin-bottom:5px;
                                height: 30px;
                                text-align: center;
                                padding-top: 3px;
                            }

                            </style>
                    </head>
                    <body>
                        <h1> THESE ARE THE ORGANIZATION </h1>
                       ${textHtml} 
                    </body>
                </html>
                `
            )
       }
   })
})

