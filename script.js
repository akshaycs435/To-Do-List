let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        let alert =document.getElementById("alert");
        alert.innerHTML="Please Enter Valid Item";
    }else{
        document.getElementById("alert").style.display="none";
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-pen-to-square"></i><i id='delete' class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle); 
        inputs.value="";
        newEle.querySelector("#delete").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
        
        newEle.querySelector("i").addEventListener("click",edit);
        function edit(){
            var updatedText=prompt('enter the task:',inputs.value);
            if(updatedText !== null){
                newEle.innerHTML = updatedText;
            };
            text.appendChild(newEle); 
            newEle.innerHTML=`${updatedText}<i id='delete' class="fa-solid fa-trash"></i>`;
            text.appendChild(newEle); 
        newEle.querySelector("#delete").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
        }
    }

     var mybtn=document.querySelector(".mybutton");


     mybtn.addEventListener("click",clickfn);

      function clickfn(){
        mybtn.textContent="add";
     }

     array=["tsr","tvm","ekm"];
     
        array.foreach(a[20](kochi))
     }






























