function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");//🌸🌸

    // Posisi acak
    sakura.style.left = Math.random() * window.innerWidth + "px";

    // Tambah ke body
    document.body.appendChild(sakura);

    // Hapus setelah jatuh
    setTimeout(() => {
        sakura.remove();
    }, 7000);
}

// Sakura jatuh setiap 200ms
setInterval(createSakura, 200);
