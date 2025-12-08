function createSakura() {
    const sakura = document.createElement("div");
    sakura.classList.add("sakura");

    sakura.style.left = Math.random() * 100 + "vw";
    sakura.style.animationDuration = (5 + Math.random() * 5) + "s";
    sakura.style.opacity = Math.random();

    document.body.appendChild(sakura);

    setTimeout(() => sakura.remove(), 10000);
}

setInterval(createSakura, 300);
