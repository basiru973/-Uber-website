
function openMenu(e) {
        let menuList = document.querySelector(" .list");
        if (e.innerHTML == "About") {
            e.innerHTML = "Close❌";
            menuList.style.display = "block";
        } else {
            e.innerHTML = "About";
            menuList.style.display = "none";
        }
    }
