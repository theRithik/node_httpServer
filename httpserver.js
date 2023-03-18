const http = require('http')

const app = http.createServer((req, res)=>{
    res.write('welcome to nodeJs training')
    res.end()
})

app.listen(3000, ()=>{
    console.log('server started in port number 3000')
})