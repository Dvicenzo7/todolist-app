import {React} from "react";

const Form = ({setTodo,Len}) => {

const formHandling = (e)=>{
    var itemtoAdd = ""
    e.preventDefault()
   itemtoAdd = e.target.firstChild.value
    if(itemtoAdd !== "")
    setTodo(state => [... state,{id:Len,todo:itemtoAdd}])
}

    return(
        <div className="Form_container">
            <form onSubmit={formHandling}>
               <input type="text" placeholder="Write a Task ..."/>
               <button type="sub,it">Add</button>
            </form>
        </div>
    );
}

export default Form