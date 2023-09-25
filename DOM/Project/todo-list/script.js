let dialogBox = document.querySelector("#dialog");
let addbtn = document.querySelector(".add");
let todoContainer = document.querySelector(".todo-container");
let todoList = document.querySelector(".todo-list");
let todoTitle = document.querySelector(".todo-title");
let todoText = document.querySelector(".todo-text");
let crossButton = document.querySelector(".close");
let text = document.querySelector(".text");
let error = document.querySelector(".error");
// let addTodo = document.querySelector(".btn")
addbtn.onclick = ()=>{
    dialogBox.style.display = "block";
}
crossButton.addEventListener("click",()=>{
    dialogBox.style.display = "none";
})
function addtodo()
{
   if(todoTitle.value !=="" && todoText.value!=="" )
   {
      let todo = ` <div class="todo-list">
      <div class="todo-header">${todoTitle.value}
        <button class="cross">X</button>
       <button class="minimize">-</button>
      </div>
      <textarea name="" id="" class = "text" cols="30" rows="10">${todoText.value}</textarea>
     </div>`
     todoContainer.innerHTML= todoContainer.innerHTML+todo;
     todoTitle.value = "";
     todoText.value = "";
     error.style.display = "none";
     dialogBox.style.display = "none";
     deleteTodo();
     minimizeTodo();
   }
   else
   {
     error.style.display = "block";
    
   }
   function deleteTodo()
   {
      let closeButton = document.querySelectorAll(".cross");
      for(let i = 0; i<closeButton.length; i++)
      {
         closeButton[i].addEventListener("click", (e)=>{
           let box = e.target.closest(".todo-list");
           box.remove();
           console.log(e.target);
           console.log(box);
         })
      }
   }
   function minimizeTodo()
   {
      let minimizeButton= document.querySelectorAll(".minimize");

      for(let i = 0; i<minimizeButton.length; i++)
      {
        minimizeButton[i].addEventListener("click",(e) => {
          let box = e.target.closest(".todo-list");
          let textArea = box.querySelector(".text");
          if(textArea.style.display!=="none")
          {
            textArea.style.display = "none";
          }
          else{
            textArea.style.display = "flex";
          }
     
        })
      }
   }
}
// document.querySelector(".cross").addEventListener("click", (e)=>{
//   console.log(e.target.closest(".todo-header"));
// })
