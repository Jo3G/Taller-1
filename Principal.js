const express = require("express");
const app = express();
const puerto =5000;
 let name = [];
 let age = [];
 let gender = [];
 let phone = [];

 //Modulo para juntar palabra y construir una ruta
 const path = require('path');
 //
 const bodyParser = require('body-parser');
 //
 app.use(bodyParser.urlencoded({extended:false}));
 //
 app.get('/', (req,res)=>{
    //__dirname indica la ubicación del proyecto
    res.sendFile(path.join(__dirname, '/formulario.html'));
});
 app.get('/datanames',(req,res)=>{
     res.send("Nombres: "+name.toString()+"<br/><a href=\"http://localhost:5000\">volver</a>");
 });
 app.get('/dataphones',(req,res)=>{
    res.send("Datos mostrados por la consola.  "+"<br/>"+"<a href=\"http://localhost:5000\">volver</a>");
    console.log("Télefono: "+ phone.toString());
});
 app.get('/datanamesgender',(req,res)=>{
    res.send("Nombres: "+name.toString()+"<br/>Genero: "+ gender.toString() +"<br/><a href=\"http://localhost:5000\">volver</a>");
});
app.get('/alldata',(req,res)=>{
    res.send("Datos mostrados por la consola.  "+"<br/><a href=\"http://localhost:5000\">volver</a>");
    console.log("Nombres: "+name.toString()+" Generos: "+ gender.toString() +" Télefonos: "+ phone.toString()+" Edades: "+ age.toString());
});
//Captura de información usando post
app.post('/',(req,res)=>{
    name.push(req.body.name);
    age.push(req.body.age);
    gender.push(req.body.gender);
    phone.push(req.body.phone);
    res.sendfile(path.join(__dirname,'/formulario.html'));
});
app.listen(puerto, () => {console.log("Ejecutando express");});
