document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("comment-form");
    const commentsList = document.getElementById("comments-list");

    const loadComments = () =>{
        const comments = JSON.parse(localStorage.getItem("comments"))||[];
        commentsList.innerHTML="";
        comments.forEach(comment =>{
            const li = document.createElement("li");
            li.textContent = `${comment.author}: ${comment.content}`;
            commentsList.appendChild(li);
        });
    };

    const saveComment = (author, content) =>{
        const comments = JSON.parse(localStorage.getItem("comments"))||[];
        comments.push({author, comments});
        localStorage.setItem("comments", JSON.stringify(comments));
    };

    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;
        saveComment(author, content);
        form.reset();
        loadComments();
    });

    loadComments()
})