// Toggle menu on click
function navShowMenu() {
    "use strict";
    document.getElementById("navMenuDropDown").classList.toggle("show");
}

// Close menu on click outside button area
window.onclick = function (event) {
    "use strict";
    
    var i,
        dropdowns = document.getElementsByClassName("dropDownMenu"),
        openDropdown = dropdowns[i];
    
    if (!event.target.matches("navMenuDropDown")) {
        
        for (i = 0; i < dropdowns.length; i += 1) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};