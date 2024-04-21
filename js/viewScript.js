document.addEventListener('DOMContentLoaded', loadPosts);

function loadPosts() {
    let postsContainer = document.getElementById('postsContainer');
    let posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'card';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.date}</p>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Imagen de publicación" style="width:100%;">` : ''}
        `;
        postsContainer.appendChild(postElement);
    });
}
