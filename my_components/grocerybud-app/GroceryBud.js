import React,{useState,useEffect} from 'react'
import Alert from './Alert'
import List from './List'
const getLocalStorage=()=>{
    let groceryList=localStorage.getItem("grocery-list");
    if(groceryList){
        return JSON.parse(groceryList);
    }
    else{
        return [];
    }
}
export default function GroceryBud() {
    const [list, setList] = useState(getLocalStorage());
    const [name, setName] = useState('');
    const [isEditing  , setisEditing] = useState(false);
const [editId, setEditId] = useState(null)
const [alert, setAlert] = useState({
  show: false,
  msg: "",
  type: "",
});
// handle the form submission
function handleSubmit(e){
    e.preventDefault();
    if(!name){
        // display alert
        showAlert(true, "Please, Enter an item.", "alert-danger");
    }
    else if(name && isEditing){
        // deal with edit
        setList(
          list.map((item) => {
            if (item.id === editId) {
              return { ...item, title: name };
            }
            return item;
          })
        );
        setName("");
        setisEditing(false)
        setEditId(null)
        showAlert(true,"Item Edited successfully","alert-success")
    }
    else{
        // show alert

        const newItem={id:new Date().getTime().toString(),title:name}
        setList([...list,newItem]);
        setName("");
        showAlert(true, "Successfully added!", "alert-success");


    }

}
// show alert
    const showAlert=(show=false,msg="",type="")=>{
        setAlert({show,msg,type});
    }
// deelete item
    const removeItem=(id)=>{
        
        setList(list.filter((item)=>id!==item.id));
        showAlert(true,"An item deleted successfully.","alert-success");
    }
    // edit item
    const editItem=(id)=>{
        setisEditing(true);
        const selectedValue=list.find((item)=>item.id===id);
        setEditId(id);
        setName(selectedValue.title);
    }
    // store list locally using local storage
    useEffect(()=>{
        localStorage.setItem("grocery-list",JSON.stringify(list));
    },[list])
    return (
      <div className="my-2">
        <h3 className="textCenter indicator titleHead my-2">Grocery Bud</h3>
        <section className=" section-center has-bg flex-row-center groceryBud">
          <div className="title">
            <h3 className="highlighter">Grocery Bud</h3>
            {alert.show && (
              <Alert {...alert} removeAlert={showAlert} list={list} />
            )}
          </div>
          <form onSubmit={handleSubmit} className="lorem-form color-form">
            <label htmlFor="label_groceryBud">Add item:</label>
            <input
              type="text"
              name="groceryBud"
              id="label_groceryBud"
              className="grocery"
              placeholder="e.g T-shirt"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="filter-btn"
              onClick={() => handleSubmit}
            >
              {isEditing ? "Edit" : "Add item"}
            </button>
          </form>
          {list.length > 0 && (
            <div className="">
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <button
                className="clear-btn"
                onClick={() => {
                  setList("");
                  showAlert(
                    true,
                    "Successfully cleared the list!",
                    "alert-success"
                  );
                }}
              >
                Clear list
              </button>
            </div>
          )}
        </section>
      </div>
    );
}
