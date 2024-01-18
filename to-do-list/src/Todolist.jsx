import React, { useState } from "react";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  const addTodo = () => {
    setList([...list, { text: inputText, completed: false }]);
    setInputText("");
  };

  const deleteTodo = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const editTodo = (index,newText) => {
    setList((list)=>
      list.map((item,i) => 
         i === index ? {...item , text : newText} : item
        
      )
    );
    setInputText("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center py-4">To do List</h1>
      <form onSubmit={(e) => {e.preventDefault(); addTodo();}}className="flex items-center mb-4 rounded">
        <input
          type="text"
          className="px-2 py-2 w-full border-black border-solid rounded"
          placeholder="Add a todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-black/70 px-2 py-2 rounded">Add</button>
      </form>
      <ul className="list-decimal">
        {list.map((item, index) => (
          <li key={index} className="flex item-center justify-between ">
            <span
              className="border-black bg-black/30 w-full pt-2 mx-1 my-1 px-2 py-2 rounded"
            >
              {item.text}
            </span>
            <div className="flex items-center">
              <button
                onClick={() => deleteTodo(index)}
                className="cursor-pointer bg-black/70 mx-1 my-1 px-2 py-2 rounded"
              >
                Remove
              </button>
              <button
                onClick={() => {
                  const newText=prompt("Enter new text:");
                  if(newText!==null){
                    editTodo(index,newText);
                  }}}
                className="cursor-pointer bg-black/70 mx-1 my-1 px-2 py-2 rounded"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
