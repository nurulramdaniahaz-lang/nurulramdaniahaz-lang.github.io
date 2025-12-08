function createSakura() {
    const sakura = document.createElement("img");
    sakura.src = "https://cdn-icons-png.flaticon.com/512/7656/7656408.png";
    sakura.classList.add("sakura");

    sakura.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 7000);
}

setInterval(createSakura, 400);
