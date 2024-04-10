'use client'
import React, { useEffect, useState } from 'react'

type Comment = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

// Define a type for the timer identifier returned by setTimeout
type TimeoutId = ReturnType<typeof setTimeout>;

const TypeAhead = () => {
    const [isPending, setIsPending] = useState(true);
    const [comments, setComments] = useState<Comment[]>([]);
    const [filteredComments, setFilteredComments] = useState<Comment[]>([]);
    useEffect(()=> {
        getComments()
    },[])
    const getComments = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            setComments(data);
            setFilteredComments(data);
            setIsPending(false)
        } catch (error) {
            console.log(error)
            setIsPending(false)
        }
    }
    const debounce = (cb:Function,delay:number) => {
        let timeoutId: TimeoutId;
        return (...args: any) => {
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() =>{
                cb(...args)
            },delay);
        }

    }
    const filterComments = debounce((e:React.ChangeEvent<HTMLInputElement> ) => {
        const searchTerm = e.target.value
        if(searchTerm){
            const filteredComments = comments.filter(comment => comment.name.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredComments(filteredComments)
        } else{
            setFilteredComments(comments)
        }}, 1000)
  return (
    <main>
        <h1 className="flex flex-col items-center text-2xl mt-8 mb-8">Comments</h1>
        {!isPending ? (
            <>
            <div className="box-border mb-8 ml-6 mr-6">
                <input disabled={!comments.length} type='text' 
                    className='border border-gray-400 rounded-lg p-2 w-full text-black'
                    placeholder="Search comments"
                    onChange={filterComments}
                />
            </div>
            {filteredComments.length ? <ul className='ml-8'>
                {filteredComments.map((comment:Comment) => (
                    <li key={comment.id}>{comment.name}</li>
                ))}
            </ul>: <span className='ml-8'>No comments found</span>}
            </>
        ) : (
            <div className="ml-8">Loading comments</div>
        )
        }
    </main>
  )
}

export default TypeAhead