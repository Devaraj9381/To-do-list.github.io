function addtask()
{
    var task=document.getElementById("task").value
    var tasklist=document.getElementById("tasklist")
    if(task=="")
    {
        alert("Please Enter The Task")
        return
    }
    var list=document.createElement('li')
    list.innerText=task
    tasklist.appendChild(list)
    var button=document.createElement('div')
    list.appendChild(button)
    button.className="task-button"
    var DeleteButton=document.createElement('button')
    button.appendChild(DeleteButton)
    DeleteButton.innerText="Delete"
    DeleteButton.onclick=function()
    {
        tasklist.removeChild(list)
    }
    var CompleteButton=document.createElement('button')
    button.appendChild(CompleteButton)
    CompleteButton.innerText="Complete"
    CompleteButton.onclick=function()
    {
       list.classList.toggle('Completed')
    }
    task.value=""
    

}