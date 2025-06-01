function onClick() {
    const h1 = document.getElementById("h1");
    const h1Element = document.createElement('h1');
    const div = document.getElementById("div")

    h1Element.innerHTML = "i love coding i lboe coding";
    div.appendChild(h1Element);
    h1.innerHTML= h1;
}