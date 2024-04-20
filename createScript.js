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
        alert("Publicación guardada!");
        clearFields();
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
        alert("Publicación guardada!");
        clearFields();
    }
}

function savePost(post) {
    let posts = localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
}
