import express from 'express';

const app = express();

// middleware
app.use(express.json());

//creating req end point
app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
    console.log(req.body);
});


//use of url parameters
app.get('/hello/:name/getid/:id', (req, res)=> {
    
    //object destructuring
    const {name} = req.params;
    
    const id = req.params.id;
    console.log(req.params);
    res.send(`Hello ${name} with id: ${id}` );
})


//server is listening
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});