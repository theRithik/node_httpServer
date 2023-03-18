const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const port = 4000

const app = http.createServer((req,res)=>{
    const urr= url.parse(req.url);
    //index route to showcase what all files are there in root of the folder
    if(urr.pathname==='/'){
     let fileLink = '<ul>';
     res.setHeader('Content-type','text/html');
     let list = fs.readdirSync('./')
     list.forEach(element=>{

        if(fs.statSync("./"+element).isFile()){
            fileLink += `<br/><li><a href ='./${element}'>
            ${element}
            </a></li>`;
        }
     }) 

    }
    
    //customized route
    if(urr.pathname==='/test'){
        res.write('this is from router test')
        res.end()

    }
})

app.listen(4000, ()=>{
    console.log('running in the server 4000')
})