
function lightOrDark(color) {

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }
    else {

        // If RGB --> Convert it to HEX: http://gist.github.com/983661
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'
        )
        );

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
        return true;
    }
    else {
        return false;
    }
}

let componentSecArr = document.getElementsByClassName("design-sec");

let pageIndexCtr = document.getElementById("page_index");

for (let i = 0; i < componentSecArr.length; i++) {
    let indexLink = document.createElement("a");
    indexLink.classList.add("page-index-item");
    indexLink.classList.add("body-l");
    indexLink.setAttribute("href", "#" + componentSecArr[i].getAttribute("id"));
    indexLink.innerHTML = `${componentSecArr[i].getAttribute("title")}` + `<i class="bi bi-arrow-right"></i>`;
    pageIndexCtr.appendChild(indexLink);
}

let colorBoxArr = document.getElementsByClassName("color-box");

for (let i = 0; i < colorBoxArr.length; i++) {
    let colorCode = colorBoxArr[i].getElementsByClassName("color-code")[0].innerHTML;

    colorBoxArr[i].style.backgroundColor = colorCode;

    let isLight = lightOrDark(colorCode);

    if (isLight == true) {
        colorBoxArr[i].style.color = "var(--text)";
    }
    else {
        colorBoxArr[i].style.color = "var(--primary-surface)";
    }
}