const express= require('express')
const app=express();
const PORT= process.env.PORT || 3001;

app.use('/static',express.static(__dirname + '/public'))
app.get(
    '/',(req,res)=> res.sendFile(__dirname + '/views/home.html')
)
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.listen(PORT ,()=>{
    console.log("Servidor iniciado en el puerto ",PORT)
});