document.getElementById('changePhoto').addEventListener('click', function() {
    const images = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ];
    const rdImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(${rdImage})`;
});
