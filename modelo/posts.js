module.exports = {

    posts: [
        {
            id: "1234324",
            title: "Teste de mural",
            description: "Descrição Teste"
        },

    ],
    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({ id: novoId(), title, description })
    }


}







function novoId() {
    return Math.random().toString(36).substring(2, 9)
}