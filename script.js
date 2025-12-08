function createSakura() {
    const sakura = document.createElement("img");
    sakura.src = "https://pngimg.com/uploads/sakura/sakura_PNG19.png"; 
    sakura.classList.add("sakura");

    // posisi random di layar
    sakura.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(sakura);

    // hapus setelah jatuh
    setTimeout(() => {
        sakura.remove();
    }, 7000);
}

// bikin 50 bunga jatuh setiap beberapa waktu
setInterval(createSakura, 200);
