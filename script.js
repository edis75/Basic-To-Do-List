function addMore(){
    let name=document.getElementById("name").value;
    if(name==""){
        document.getElementById("error").innerHTML="Please enter any thing";
    }
    else{
        let box=document.getElementById("box");
        let li =document.createElement("li");
        li.textContent=name;
        let a=document.createElement('a');
        a.textContent='X';
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        let pos =box.firstElementChild;
         
        if(pos==""){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos);
        }
    }
    document.getElementById("name").value="";
}
let btn=document.querySelector("ul");
btn.addEventListener("click",function(e){
    let box=document.getElementById("box");
    let li =e.target.parentNode;
    box.removeChild(li);
});