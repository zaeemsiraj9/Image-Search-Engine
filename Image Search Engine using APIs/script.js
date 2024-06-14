document.addEventListener("DOMContentLoaded", () => {
const searchform = document.getElementById("search-form");
const accesskey = "EkcOvqFnFQV_5pq5Y0Pu6CB4NCLUS4dk_XH7N7bDTwM";
const searchbox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showmoreimages = document.getElementById("show-more-images");

let keyword = "";
let page = 1;

async function searchimages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page===1){

        searchresult.innerHTML = "";
    }
    const results = data.results;


    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.classList.add("fade-in");
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchresult.appendChild(imageLink);
    })
    showmoreimages.style.display = "block";

    console.log(data);
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchimages();
});

showmoreimages.addEventListener("click",()=>{
    page++;
    searchimages();
})

})