const PORT = 8080;
const express = require('express');
const app = express();

let posts = [
    {
        id: "1234324",
        title: "Teste de mural",
        description: "Descrição Teste"
    }
]
app.use(express.json());
app.use(express.urlencoded());

app.get("/all", (req, res) =>{
res.json(JSON.stringify(posts))
})
app.post("/new", (req, res) =>{
      let id = novoId()
      let title = req.body.title
      let description = req.body.description

      posts.push({id,title,description})


      res.send("Post adicionado")
})

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT)
})

function novoId () {
    return Math.random().toString(36).substring(2,9)
}