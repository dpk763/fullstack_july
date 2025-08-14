import express from 'express'
import logger from './middleware.js';
const app = express();
app.use(express.json());
app.use(logger);
let students = [
    {
        id:1,
        name:"mohan",
        age:21
    },
    {
        id:2,
        name:"rohan",
        age:24
    },
    {
        id:3,
        name:"ankit",
        age:23
    },
    {
        id:4,
        name:"sonu",
        age:25
    },
]

app.get('/',(req, res)=>{
    res.send(students);
});

app.post('/',(req,res)=>{
    students.push({id:students.length+1,name:req.body.name,age:req.body.age});
    res.send("data added successfuly!");
})

app.put('/data/:id',(req, res)=>{
    const student = students.find(u=>u.id===parseInt(req.params.id));
    student.name=req.body.name;
    res.send("data updated!");
})

app.delete('/data/:id',(req, res)=>{
    students = students.filter((u)=>u.id!==parseInt(req.params.id));
    res.send("data deleted!");
})

app.listen(3000,()=>console.log("server is running on 3000 port"));



