const PORT = 8080;
const express = require('express');
const app = express();
const posts = require('./modelo/posts');



app.use(express.json());
app.use(express.urlencoded());


app.get("/all", (req, res) =>{

res.json(JSON.stringify(posts.getAll()))

})



app.post("/new", (req, res) =>{
     
      let title = req.body.title
      let description = req.body.description

   posts.newPost(title, description)


      res.send("Post adicionado")
})

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT)
})

