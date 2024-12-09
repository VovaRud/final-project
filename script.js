alert("Вас вітає літературна Кобеляччина");
function changeBackground() {
    const images = [
        'https://ukrainaincognita.com/wp-content/uploads/2021/06/kobeliaky6.jpg',
        'https://ukrainaincognita.com/wp-content/uploads/2021/06/kobeliaky5.jpg',
        'https://ukrainaincognita.com/wp-content/uploads/2021/06/kobeliaky9a.jpg',
        'https://ukrainaincognita.com/wp-content/uploads/2021/06/kobyliaky_mist5.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tWiMD9Lf2o1Y7Vgu7xJR2pG0eQtOy-a9-g&s',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url('${images[randomIndex]}')`;
}