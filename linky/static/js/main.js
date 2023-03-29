// toggle dashbord
let toggleDashbord = document.querySelector(".openDashbord"),
    container = document.querySelector(".sideBarParent");
toggleDashbord.addEventListener("click", () => {
    container.classList.toggle("active");
});


function choose(section) {
    document.getElementById("11").style.display = "none";
    document.getElementById("22").style.display = "none";
    document.getElementById(section).style.display = "block";
    let c1 = document.getElementById("x1");
    let c2 = document.getElementById("x2");
    if (section == "11") {
        c2.classList.remove("active");
        c1.classList.add("active");
    } else {
        c1.classList.remove("active");
        c2.classList.add("active");
    }
    // document.querySelectorAll("controls a.active")
    //     .forEach((a) => {
    //         a.classList.remove("active");
    //     });
    // list.forEach((a) => {
    //     if (a.dataset.toggle == section) {
    //         a.classList.add("active")
    //     }
    // })
}

function choose1(section) {
    document.location.href = "choose_section " + section;
    execute(section);
}
// favorite article button

// let favoriteButton = document.querySelectorAll(".addToFavorite"),
//     favoriteIcon = localStorage.getItem("favorite");
// Cookies.set("favorite", "false");
// const addToFavourite = (icon) => {
//     Cookies.set("favorite", "true");
//     localStorage.setItem("favoriteIcon", "enable");
//     icon.classList.remove("fal");
//     icon.classList.add("fas", "fa-heart", "red_heart");
// };
// const removeFavorite = (icon) => {
//     Cookies.set("favorite", "false");
//     localStorage.setItem("favoriteIcon", null);
//     icon.classList.remove("fas", "fa-heart", "red_heart");
//     icon.classList.add("fal", "fa-heart");
// };
// favoriteButton.forEach((icon) => {
//     icon.addEventListener("click", (clickedIcon) => {
//         if (clickedIcon.target.classList.contains("fas")) {
//             removeFavorite(clickedIcon.target);
//         } else {
//             addToFavourite(clickedIcon.target);
//         }
//     });
// });
