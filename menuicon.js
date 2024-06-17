// Set initial maxHeight and display properties
let menuList = document.getElementById("menuList");


function toggleMenu() {
    // Toggle display property
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";  
    } else {
        menuList.style.display = "none";
    }

    
}