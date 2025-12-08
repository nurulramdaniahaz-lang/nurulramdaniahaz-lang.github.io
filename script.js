function createSakura() {
    const sakura = document.createElement("img");
    sakura.src = "https://cdn-icons-png.flaticon.com/512/7659/7659689.png"; // gambar kelopak
    sakura.classList.add("sakura");

    // posisi random
    sakura.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(sakura);

    // hapus setelah animasi selesai
    setTimeout(() => {
        sakura.remove();
    }, 7000);
}

// buat bunga setiap 300ms
setInterval(createSakura, 300);
