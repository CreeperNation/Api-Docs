fetch("https://rory.cat/purr").then((res) => res.json()).then((res) => {
    document.getElementById("rory").src = res.url;
});