function buatSakura() {
    const img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/512/7656/7656408.png"; 
    img.className = "sakura";

    img.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 6000);
}

setInterval(buatSakura, 300);
