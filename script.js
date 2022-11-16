const btn_add = document.querySelector(".add_todo");
const ul = document.querySelector('ul');
const ul_end = document.querySelector('.end_todo');
var counter = 1;
var counter_end = 1;



function getCheckedCheckBoxes() {
    var checkboxes = document.getElementsByClassName('todo');
    var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать 
    for (var index = 0; index < checkboxes.length; index++) {
       let list = [];
       if (checkboxes[index].checked) {
          
            for(let i = 0; i < counter; i++)
            {
                let stroka = "id"+i;
                list.push(document.getElementById(stroka));
                if(list[i] == null)
                {
                    list.splice(i,1);
                }    
            }
          for (let i = 0; i < list.length; i++)
          {
            if(list[i] == null)
            {
                list.splice(i, 1);
            }
          }
          
          for(let i = 0; i < list.length; i++)
          {
            if(list[i] == null)
            {
                continue;
            }
            else if(list[i].checked)
            {
                let id = + list[i].id.replace('id', '');
                let val = "_" + id;
                let str = "li_" + (list[i].id.replace('id', ''));
                let del_li = document.getElementById(str);
                if (document.getElementById(val).value == '')
                {
                    alert("А смысл завершать пустую задачу?");
                    return 0;
                }
                else
                {
                    let li = document.createElement('li');
                    li.innerHTML = '<div class=line></div> <input type=checkbox name=todo_check id="'+ counter_end +'" checked disabled><input type=text disabled class=text_todo_end value= "'+ document.getElementById(val).value+'">'
                    counter_end +=1;
                    ul_end.append(li);
                    list[i].checked = false;
                    
                    del_li.remove(del_li);
                    flag = true;
                    document.querySelector('.select_all').value = "Выделить все";
                } 
            }
          }
        }
    }
    return true;
}

btn_add.addEventListener('click', (e) =>{
    
    if(getCheckedCheckBoxes() == true)
    {
        let li = document.createElement('li');
        li.id = 'li_' + counter;
        li.innerHTML = '<input type=checkbox name=todo_check id="id'+ counter +'" class=todo><input type=text class=text_todo id="_'+counter+'" value = "'+'">';
        ul.append(li);
        counter += 1;
    }
    else
    {
        return 0;
    }
   
});
var flag = true;
document.querySelector('.select_all').addEventListener('click', (e) => {
    if (flag)
    {
        [].forEach.call(document.querySelectorAll('.todo'), c => c.checked = true);
        flag = false;
        document.querySelector('.select_all').value = "Снять выделения";
    }
    else
    {
        [].forEach.call(document.querySelectorAll('.todo'), c => c.checked = false);
        flag = true;
        document.querySelector('.select_all').value = "Выделить все";
    }
    
});





