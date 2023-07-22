import { useState } from "react"

function List() {
    const [list, setList] = useState([]);
    const [count,setCount] = useState(1)

    function addItem() {
        const itemName = 'Item'+count;
        setList((previousState) => {  return [...previousState,itemName]})
        setCount((previousState) => { return previousState+1})
    }

    console.log('current state',list)

    return  <>
                <h1>List</h1>
                <button onClick={addItem}>Add Item</button>
                <ul>{
                        list.map((el,index) =>  <li key={index}>{el}</li> )
                    }
                </ul>
            </>
          
}

export default List;