document.addEventListener('DOMContentLoaded', loadPosts);

function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const post = {
            title: title,
            content: content,
            image: imageFile ? e.target.result : null
        };
        savePost(post);
        displayPost(post);
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        const post = {
            title: title,
            content: content,
            image: null
        };
        savePost(post);
        displayPost(post);
    }
}

function savePost(post) {
    let posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function loadPosts() {
    let posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.forEach(post => displayPost(post));
}

function displayPost(post) {
    const newPost = document.createElement('div');
    newPost.innerHTML = `
        <div class="card">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image" style="width:100%;">` : ''}
        </div>
    `;
    document.body.appendChild(newPost);
}
