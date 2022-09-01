
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts() {

    fetch("http://localhost:8080/api/all")
        .then(res => {
            return res.json()
        }).then(json => {

            let postElements = ''
            let posts = JSON.parse(json)

            posts.forEach((post) => {
                let postElement = `<div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`

                postElements += postElement;
            })

            document.getElementById("posts").innerHTML = postElements
        })
}





function newPost() {
    let title = document.getElementById("tit").value;
    let description = document.getElementById("desc").value;

    let post = { title, description }

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'aplication/json' }),
        body: JSON.stringify(post)
    }


    fetch("http://localhost:8080/api/new", options).then(res => {
            console.log(res);
            updatePosts();


        })

}