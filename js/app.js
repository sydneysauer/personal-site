// Set up menu array
var color = "#DEAEA4";
var menuItems = [];
const menuLinks = document.querySelectorAll('.menuitem');
for (const link of menuLinks) {
    const section = document.getElementById(link.innerHTML);
    menuItems.push(section);
}

console.log(menuLinks);
console.log(menuItems);

menuLinks.forEach(link => link.addEventListener("click", function show() {
    console.log(this);
    
    for(const item of menuItems) {
        item.classList.add("hidden");        
        if (item.id === link.innerHTML) {
            item.classList.remove("hidden");
        }
    }
    resetLinks(menuLinks);
    this.classList.add("active");
    
}));

function resetLinks(arr) {
    for (const item of arr) {
        item.classList.remove("active");
    }
}