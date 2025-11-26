import http from 'http';
const server=http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.write('Home Page')
    }
    else if(req.url==="/about"){
        res.write('About Page')
    }
    else{
        res.write('ERROR : URL NOT FOUND')
    }
})
server.listen(3002,()=>{
    console.log('Server is running on port 3002');
})