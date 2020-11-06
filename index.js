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
    db.query(`select o."org_name", COUNT(*)
        from organization as o
        LEFT JOIN memberships as m on o."org_id" = m."org_id"
        group by org_name;`, (error, results) => {
        if (error) {
            response.writeHead(500);
            response.end('SOMETHING WENT WRONG:' + error)
        } else {

            const { rows : organizations } = results;
            let textHtml = '';
            for (const organization of organizations) {
                textHtml += ` 
                <div> ${organization.org_name} 
                <i><small> (${organization.count}) </small></i>
                </div> 
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
                        <a href="/">PAGE 1</a>
                        <a href="/page2">PAGE 2</a>
                        <h1> THESE ARE THE ORGANIZATIONS </h1>
                       ${textHtml} 
                    </body>
                </html>
                `
            )
       }
   })
})




app.get('/page2', (request, response) => {
    db.query(`
    SELECT o."org_name" , s."first_name" , s."last_name" , p."ap_name"
    from memberships as m
    inner join organization as o on m.org_id = o.org_id
    inner join students as s on m.student_id = s.student_id
    inner join academicprograms as p on s.ap_id = p.ap_id
    ;
    
    `, (error, results) => {
        if (error) {
            response.writeHead(500);
            response.end('SOMETHING WENT WRONG:' + error)
        } else {

            const { rows : students } = results;
            let textHtml = '';
            for (const student of students) {
                textHtml += ` 
                <div> ${student.org_name} , ${student.first_name} ${student.last_name} | ${student.ap_name}  </div> 
                `
             }

            response.writeHead(200, {
                'Context-Type' : 'text/html'
            })


            response.end(
                `
                <html>
                    <head>
                    <link rel="stylesheet" href="style.css">
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
                                font-size: 12px;
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
                        <a href="/">PAGE 1</a>
                        <a href="/page2">PAGE 2</a>
                        <h1> ORG AND MEMBERS </h1>
                       ${textHtml} 
                    </body>
                </html>
                `
            )
       }
   })
})

