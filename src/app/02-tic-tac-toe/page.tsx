import React from 'react'

const TicTacToe = () => {
   let arr = [1,2,3]
  const generateBlocks = (item:number) => {
    
            return (<div className="border-2 border-solid border-white w-20 h-20">{item}</div>)
        }   
   
  return (
    <div className="flex justify-center items-center w-full h-full">
        {  
        arr.map(item1 => {
            return (<div key={item1}>
                {
                    arr.map(item => {
                        return generateBlocks(item)
                    })
                }
            </div>)
        })
        }
    </div>
  )
}

export default TicTacToe