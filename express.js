import express from 'express';
const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 9090 ;
class Game{
    constructor (name,year){
        this.name=name;
        this.year = year ;
    }
}
app.get('/',(req , res) =>{
    res.status(200).json({message : 'hello world'});
})

app.get('/game/:name',(req,res)=>{
res.status(200).json(`The name of this game is ${req.params.name}`);
})

app.get('/secret',(req,res)=>{
    res.status(401).jjson({message : 'ERREUR'});
    })

app.get('/entity',(req,res)=>{
    const game = new Game("dmc5",2019);
res.status(200).json(game);    
 })
app.listen(port , hostname,()=>{
console.log(`Server running at http://${hostname}:${port}/`);
})


