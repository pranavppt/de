const searchBtn = document.querySelector("#search")
const list = document.querySelector("ul")
const nav = document.querySelector("nav")

const menu = document.getElementsByTagName("i")[2]
const close = document.getElementsByTagName("i")[3]

menu.addEventListener("click" , ()=>{
    document.querySelector("nav").style.transform = "translateX(0vw)"
    document.querySelector(".navLink").style.transform = "translateX(0vw)"
    menu.style.display ="none"
    close.style.display ="unset";
}
)

close.addEventListener("click" , ()=>{
    document.querySelector("nav").style.transform = "translateX(100vw)"
    document.querySelector(".navLink").style.transform = "translateX(100vw)"
    close.style.display ="none"
    menu.style.display ="unset";
}
)


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
