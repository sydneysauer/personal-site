
// Menu and page load functionality 
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

// Data for writing info cards
var edible = {
    pub: "Edible Ohio Valley",
    title: "Connecting Rural Farming and Urban Consumption",
    date: 2019,
    link: "https://www.edibleohiovalley.com/eov/2019/essay-connecting-rural-farming-urban-consumption",
    img: "https://static1.squarespace.com/static/56d49b30c6fc08c53774434b/56d4b599859fd0a68851c293/5ce6bdad7817f79bd789bc9b/1563980595323/"
}

var vox = {
    pub: "Vox",
    title: "Why Aren't Politicians Doing More on Climate Change?",
    date: 2017,
    link: "https://www.vox.com/first-person/2017/7/14/15959968/climate-change-teenager",
    img: "https://media.journoportfolio.com/system/images/b0abc84d-97e9-497d-b7d3-086a6d6ff799_max-600.jpg"

}

var lv = {
    pub: "Listverse",
    title: "10 Things that will Disappear Forever if the Bees Die",
    date: 2017,
    link: "https://listverse.com/2017/07/17/10-things-that-will-disappear-forever-if-the-bees-die/",
    img: "https://listverse.com/wp-content/uploads/2017/07/iStock-508347202-632x332.jpg"

}

var lindsay = {
    pub: "Lindsay Does Languages",
    title: "4 Problems with High School Spanish",
    date: 2015,
    link: "https://www.lindsaydoeslanguages.com/guest-post-4-problems-with-high-school-spanish/",
    img: "https://media.journoportfolio.com/system/images/ad2484a7-3781-4bc2-818a-99b512e39c3b_max-600.jpeg"
}

var writing = [
    edible,
    vox,
    lv,
    lindsay
];

// Generate info cards
const cardContainer = document.getElementById("card-container");
console.log(writing);
console.log(lindsay);
for (const piece of writing) {
    const all = document.createElement("div");
    all.classList.add("writing-card", "horizontal");
    cardContainer.appendChild(all);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("one-third");
    const captionDiv = document.createElement("div");
    captionDiv.classList.add("half", "caption");
    all.appendChild(imageDiv);
    all.appendChild(captionDiv);

    const publication = document.createElement("p");
    publication.innerHTML = `${piece.pub}, ${piece.date}`;
    const description = document.createElement("h3");
    description.innerHTML = piece.title;
    captionDiv.appendChild(description);
    captionDiv.appendChild(publication);

    const image = document.createElement("img");
    image.classList.add("fit");
    image.setAttribute("src", piece.img);
    imageDiv.appendChild(image);

    // add functionality 
    all.addEventListener("click", function openPage() {
        window.open(piece.link);
    });
}

