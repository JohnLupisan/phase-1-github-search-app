document.addEventListener("DOMContentLoaded, userGit")

function userGit() {
    let userGit = document.querySelector("#github-form")
    FormData.addEventListener("submit", (event) => {
        event.preventDefault()
    let search = form.querySelector("#search").value
    gitUrl = `https://api.github.com/search/users?q=${search}`

fetch(gitURL, {
    method: "GET",
    headers:{
        Accept: "application/vnd.github.v3+json"
    }
})
.then(res => res.json())
.then(data => {
    users = data.items
    showUser(users)
})
    userGit.reset()
})
}
