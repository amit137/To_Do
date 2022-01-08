window.addEventListener('load',()=>{
 
     const form=document.querySelector('#todo-form');
     const input=document.querySelector('#todo-input');
     const tasks_el=document.querySelector('#tasks');

     form.addEventListener('submit',(e)=>{
         e.preventDefault()
        
         const task=input.value
         if(!task){
             alert('No to do added, Please write something..')
              return
         }


         const taskEl=document.createElement('div')
         taskEl.classList.add('task')

         const contentEl=document.createElement('div')
         contentEl.classList.add('content')

         

         const textEl=document.createElement('input')
         textEl.classList.add('text')
         textEl.type='text'
         textEl.value=task
         textEl.setAttribute('readonly','readonly')

        const actionsEl=document.createElement('div')
        actionsEl.classList.add('actions')

    

    const editEl=document.createElement('button')
    editEl.classList.add('edit')
    editEl.innerHTML='EDIT'

    const deleteEl=document.createElement('button')
    deleteEl.classList.add('delete')
    deleteEl.innerHTML='DELETE'

    const checkEl=document.createElement('button')
    checkEl.classList.add('check')
    checkEl.innerHTML='CHECK'




    taskEl.appendChild(contentEl)
    contentEl.appendChild(textEl)
    actionsEl.appendChild(editEl)
    actionsEl.appendChild(deleteEl)
    contentEl.appendChild(checkEl)
    taskEl.appendChild(actionsEl)
    tasks_el.appendChild(taskEl)
    actionsEl.appendChild(checkEl)
    

    input.value=' '




checkEl.addEventListener('click',()=>{
   
    textEl.style.textDecoration="line-through"
    checkEl.innerHTML='DONE'
   
})




     editEl.addEventListener('click',()=>{
        if(editEl.innerHTML.toLowerCase()=='edit'){
            if(textEl.style.textDecoration!="line-through"){  
            textEl.removeAttribute('readonly')
            textEl.focus()
            editEl.innerText='SAVE'
            }
            else{
                textEl.setAttribute('readonly','readonly')//if textdecoration line through,then can't edit,once mark done
            }
    
        }
        else{
            textEl.setAttribute('readonly','readonly')
            editEl.innerHTML='EDIT'
        }
     })



    
    deleteEl.addEventListener('click',()=>{

        tasks_el.removeChild(taskEl)
    })


     })



})