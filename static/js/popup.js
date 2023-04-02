const close = document.querySelector(".close-popup"),
    newArticle = document.querySelector(".newArticle");

function openPopup(em, name, di) {
    const u = document.getElementById("url");
    u.value = name;
    const e = document.getElementById("name");
    e.value = em;
    const d = document.getElementById("description");
    d.value = di;
    const x = document.getElementById("state");
    x.value = em;

    newArticle.classList.add("active");
}

function openPopup1() {
    newArticle.classList.add("active");
}

function closePopup() {
    newArticle.classList.remove("active");
}
// خلصني و اشتغل
let popup = document.querySelector(".newArticle-form ");
let heightAdjustment = () => {
    if (window.innerHeight < 550) {
        popup.style.cssText = "top:calc(50px + 1rem);margin-bottom:80px;";
    } else {
        popup.style.cssText = "top:0; margin-top:70px";
    }
};
window.addEventListener("resize", heightAdjustment);
window.addEventListener("load", heightAdjustment);

let link = document.getElementById("url");
function validateURL(url) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
}

let submit = document.querySelector(".newArticleBtn");
submit.addEventListener("submit", (e) => {
    if (!validateURL(link.value)) {
        e.preventDefault();
        link.style.cssText = "border: 1px solid #dc3545;";
    } else {
        link.style.cssText = "border-color:var(--borderColor)";
    }
});
if (link != null) {
    link.addEventListener("change", (e) => {
        if (!validateURL(link.value)) {
            e.preventDefault();
            link.style.cssText = "border: 1px solid #dc3545";
        } else {
            link.style.cssText = "border-color:var(--borderColor)";
        }
    });
}
