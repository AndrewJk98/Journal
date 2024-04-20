function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const currentDate = new Date().toLocaleDateString("es-ES", {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const imageFile = document.getElementById('image').files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const post = {
            title: title,
            content: content,
            date: currentDate,
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
            date: currentDate,
            image: null
        };
        savePost(post);
        alert("Publicación guardada!");
        clearFields();
    }
}
