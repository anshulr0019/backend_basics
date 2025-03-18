// step 1: create a folder
// step 2: move into that folder
// step 3: npm init -y
//step4 : open folder using vscode
// step5: npm i express
// step 6: create server.js

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});

app.get('/', (req,res) => {
    res.send("hello jee, ssupp");
});

app.post('/api/cars', (req, res) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted successfully")
})