'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
import ReactDragListView from 'react-drag-listview';

type Item = {value:string,strike:boolean, id:number}

const TodoList = () => {
    const [list,setList] = useState<Item[]>([])
    const [editId,setEditId] = useState<number|null>(null)

    useEffect(() => {
        const todoList = localStorage.getItem('todoList')
        if(todoList){
            setList(JSON.parse(todoList))
        }
    },[])
    const addToList = () => {
        const item = document.getElementById('todoItem') as HTMLInputElement
        if(item?.value){
            const items = [...list];
            items.push({value:item?.value,strike:false, id: new Date().getTime()})
            setList(items)
            item.value = ''
        }
    }
    const strike = (index:number) => {
       const items = [...list];
       items[index].strike = !items[index].strike;
       setList(items)
    }

    const editItem = (index:number) => {
        const item = document.getElementById('todoItem') as HTMLInputElement
        item.value = list[index].value
        setEditId(list[index].id)
    }
    const removeItem = (item:Item) => {
        const items = list.filter(i => i.id !== item.id)
        setList(items);
    }

    const saveItem = () => {
        const item = document.getElementById('todoItem') as HTMLInputElement
        // const items = [...list]
        if(editId && item?.value){
            const items = list.map(i => i.id === editId ? {...i, value:item.value} : i)
            // items[editId].value = item.value;
            item.value = '';
            setEditId(null)
            setList(items)
        }
    }

    const cancelEdit = () => {
        const item = document.getElementById('todoItem') as HTMLInputElement
        item.value = ''
        setEditId(null)
    }

    const dragProps = {
        onDragEnd(fromIndex:number, toIndex:number) {
          const data = [...list];
          const item = data.splice(fromIndex, 1)[0];
          data.splice(toIndex, 0, item);
          setList(data)
        },
        nodeSelector: 'li',
        handleSelector: 'a'
      };
    
    const persist = () => {
        if (window.confirm("Do you really want to persist the list?")) {
        localStorage.setItem('todoList',JSON.stringify(list))
        alert('To do list is saved')
        }
    }
    const clearList = () => {
        if (window.confirm("Do you really want to clear the list?")) {
            localStorage.removeItem('todoList')
            setList([])
        }
    }
    return (
    <div className='flex flex-col items-center justify-items-center w-full p-10'>
        <div className="text-6xl">To Do List</div>
        <div className='mt-4 mb-4'>
            <input className='pl-2 text-black' autoFocus type="text" name="todoItem" id="todoItem" placeholder='Add to list'/>
            {editId ? (
                <>
                    <button className='ml-10 p-2 rounded-lg border-solid border-white border-2' onClick={saveItem}>Save</button>
                    <button className='ml-10 p-2 rounded-lg border-solid border-white border-2' onClick={cancelEdit}>Cancel</button>
                </>
            ): (
                <button className='ml-10 p-2 rounded-lg border-solid border-white border-2' onClick={addToList}>Add</button>
            )}
        </div>
        <ReactDragListView {...dragProps}>

            <ol>
                {list.map((item,index) => {
                    return (
                        <li key={item.id} className='todo-item text-4l' >
                                <div>
                                    <a href="#" className='drag'></a>
                                    <div className={item.strike ? 'strike' : 'item'} onClick={() => strike(index)}>{`${index+1} ${item.value}`}</div>
                                </div>
                                <div>
                                    <button className='m-4 p-2 rounded-lg border-solid border-white border-2' onClick={() =>editItem(index)}>Edit</button>
                                    <button className='m-4 p-2 rounded-lg border-solid border-white border-2' onClick={() =>removeItem(item)}>Remove</button>
                                </div>
                        </li>
                    )
                })}
            </ol>
        </ReactDragListView>
        <div className='flex items-center justify-center w-full p-10'>
            <button className='ml-10 p-2 rounded-lg border-solid border-white border-2' onClick={persist}>Persist</button>
            <button className='ml-10 p-2 rounded-lg border-solid border-white border-2' onClick={clearList}>Clear All</button>
        </div>
    </div>
    )
}

export default TodoList