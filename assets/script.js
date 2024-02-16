let buton=document.querySelector(".add")
let ul=document.querySelector(".ul")
buton.addEventListener("click",function(){
    let input=document.querySelector(".input")
    let text=input.value
    if (text.trim()=="") {
        alert("Bosluq elave edile bilmez.")
        return;
    }
    let li=document.createElement("li")
    li.className="li";
    li.innerText=text
    ul.append(li)
    input.value=""
    let deleteButton=document.createElement("img")
    deleteButton.className="delete";
    deleteButton.src="./assets/icons/delete.svg";
    li.append(deleteButton)
    deleteButton.addEventListener("click",function(){
        // li.classList="gorsenmez"
        li.remove();
    })
})
