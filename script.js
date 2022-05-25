var todos=[]

function main()
{
  //LEFT_PANE
  var leftPaneDiv = document.createElement("div");
  leftPaneDiv.setAttribute("id","leftDiv");
  document.body.appendChild(leftPaneDiv);

  var heading = document.createElement("h1");
  heading.setAttribute("id","heading");
  leftPaneDiv.appendChild(heading);
  heading.innerHTML=" TASK LIST";

  var subHeading = document.createElement("h3");
  subHeading.setAttribute("id","subHeading");
  leftPaneDiv.appendChild(subHeading);
  subHeading.innerHTML='Add tasks to your list by typing to the right and pressing enter. You may then view pending task below.';  


  //RIGHT_PANE
  var rightPaneDiv = document.createElement("div");
  rightPaneDiv.setAttribute("id","rightDiv");
  document.body.appendChild(rightPaneDiv);

  var inputTodo = document.createElement("textarea");
  inputTodo.placeholder="I need to do...";
  inputTodo.setAttribute("id","textbox");
  rightPaneDiv.appendChild(inputTodo);
  
  inputTodo.addEventListener('keyup',eventHandler);

}

function eventHandler(event)
{
  var keyCode = event.code;
  var leftDiv = document.getElementById("leftDiv");
  var textbox = document.getElementById("textbox");

  if(keyCode==='Enter' && textbox.value !== '')
  {
    var container = document.createElement("div");
    container.setAttribute("id","container");

    //TASK_HEADING_LEFT_PANE
    var taskHeading = document.createElement("p");
    taskHeading.setAttribute("id","taskHeading");
    taskHeading.innerHTML = textbox.value;
    container.appendChild(taskHeading);
    todos.push(textbox.value);
    localStorage.setItem('todos',JSON.stringify(todos));
    
    //CONFIRM_CHECKBOX
    var donebtn = document.createElement("input");
    donebtn.setAttribute("type","checkbox");
    donebtn.setAttribute("id","donebtn");
    container.appendChild(donebtn);
    donebtn.addEventListener('change', function() 
    {
      if (this.checked) 
      {
        taskHeading.style.textDecoration="line-through";
      }else 
      {
        taskHeading.style.textDecoration="none";
      }
    })
   

    //EDIT_BUTTON
    var editbtn = document.createElement("div");
    editbtn.setAttribute("id","editbtn");
    editbtn.innerHTML='<i class="fa-solid fa-pencil"></i>';
    container.appendChild(editbtn);
    editbtn.addEventListener("click",function(event)/////////edit_function/////////
  {
    var txt = prompt("Edit the to-do task")

    if(txt !== null)
    {
      var textHeading = editbtn.parentElement.firstChild;
      todos[todos.indexOf(textHeading.innerHTML)]=txt;
      textHeading.innerHTML=txt;

      localStorage.clear;
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  })
    
    //DELETE_BUTTON
    var delbtn = document.createElement("div");
    delbtn.setAttribute("id","delbtn");
    delbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    container.appendChild(delbtn);
    delbtn.addEventListener("click",function(event) //////////delete_function/////////////
  {
    var txt = delbtn.parentElement.firstChild.innerHTML;
    var idx = todos.indexOf(txt);
    todos.splice(idx,1);

    localStorage.clear;
    localStorage.setItem("todos", JSON.stringify(todos));
    delbtn.parentElement.remove();
  })

    
    leftDiv.appendChild(container);
    textbox.value="";


  }
}

main()

var stored = localStorage.getItem("todos");
if(stored!==null)
{
  todos = JSON.parse(stored);
}

todos.forEach(function(value)
{
  var container = document.createElement("div");
  container.setAttribute("id","container");

  //TASK_HEADING_LEFT_PANE
  var taskHeading = document.createElement("p");
  taskHeading.setAttribute("id","taskHeading");
  taskHeading.innerHTML = value;
  container.appendChild(taskHeading);
    
  //CONFIRM_CHECKBOX
  var donebtn = document.createElement("input");
  donebtn.setAttribute("type","checkbox");
  donebtn.setAttribute("id","donebtn");
  container.appendChild(donebtn);
  donebtn.addEventListener('change', function() ///////checkbox function////////////
  {
    if (this.checked) 
    {
      taskHeading.style.textDecoration="line-through";
    }else 
    {
      taskHeading.style.textDecoration="none";
    }
  })
   

  //EDIT_BUTTON
  var editbtn = document.createElement("div");
  editbtn.setAttribute("id","editbtn");
  editbtn.innerHTML='<i class="fa-solid fa-pencil"></i>';
  container.appendChild(editbtn);
  editbtn.addEventListener("click",function(event)/////////edit_function/////////
  {
    var txt = prompt("Edit the to-do task")

    if(txt !== null)
    {
      var textHeading = editbtn.parentElement.firstChild;
      todos[todos.indexOf(textHeading.innerHTML)]=txt;
      textHeading.innerHTML=txt;

      localStorage.clear;
      localStorage.setItem("todos",JSON.stringify(todos));
    }
  })
    
  //DELETE_BUTTON
  var delbtn = document.createElement("div");
  delbtn.setAttribute("id","delbtn");
  delbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
  container.appendChild(delbtn);
  delbtn.addEventListener("click",function(event) //////////delete_function/////////////
  {
    var txt = delbtn.parentElement.firstChild.innerHTML;
    var idx = todos.indexOf(txt);
    todos.splice(idx,1);

    localStorage.clear;
    localStorage.setItem("todos", JSON.stringify(todos));
    delbtn.parentElement.remove();
  })

    
  leftDiv.appendChild(container);
})
