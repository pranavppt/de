const searchBtn = document.querySelector("#search")
const list = document.querySelector("ul")
const nav = document.querySelector("nav")



search.addEventListener("click", () => {
    if(document.querySelector("input")=== null){
        const search = document.createElement("input")
    search.type = "text"
    search.style.width = "200px"
    search.style.backgroundColor = "white"
    nav.insertBefore(search,list)
    search.style.borderRadius= "0.5rem"
    }
    
})