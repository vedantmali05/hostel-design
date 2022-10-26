// Function that populates an Icon SVG Code where the element with class is found
function populateIcon(icon, parent) {
    for (let i = 0; i < parent.length; i++) {
        parent[i].innerHTML = icon;
    }
}

// Right Arrow
let iconParent_arrowRight = document.querySelectorAll(".icon.arrow-right");
let icon_arrowRight = 
`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 15 15"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>`
populateIcon(icon_arrowRight, iconParent_arrowRight);