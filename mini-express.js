import http from 'http';
import url from 'url';
import qs from 'querystring'

function miniExpress() {
    
    const routes = {
        GET: {},
        POST: {}
    }


    const server = http.createServer((request, response) => {
        request.query = qs.parse(url.parse(request.url).query)
        const pathname = url.parse(request.url).pathname;

        if (routes[request.method][pathname]) {
            routes[request.method][pathname](request, response);
        } else {
            response.writeHead(404, {
                'Content-Type' : 'text/html'
            })

            response.write(
                `
                <html>
                    <body> NOT FOUND </body>
                <html>
                `
            )
        }
    })

    server.get = (url, handler) => {
        routes['GET'][url] = handler
    }

    server.post = (url, handler) => {
        routes['POST'][url] = handler
    }

    return server;
}

export default miniExpress;