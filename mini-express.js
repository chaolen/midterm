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
        routes[request.method][request.url](request, response);
        response.end();
    })

    server.get = (url, handler) => {
        routes['GET'][url] = handler
    }

    server.post = (url, handler) => {
        routes['POST'][url] = handler
    }
}

export default server;