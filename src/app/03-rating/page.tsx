'use client'
import './style.css'
import React, { useState } from 'react'

const StarRating = () => {
    const [rating,setRating] = useState(0)
    const updateRating = (e: any) => {
        console.log(e.target.value)
        setRating(e.target.value)
    }
    let arr = [1,2,3,4,5]
  return (
    <div className='flex flex-col items-center justify-items-center w-full p-10'>
        <div className='text-9xl'>StarRating</div>
        
        
        <div className="flex">
                {arr.map((_)=> {
                    // return (<span key={_} className={_<= Math.floor(rating) ? "rating" : _ > Math.ceil(rating)? '': 'F'+(rating%1*100).toString()}>&#9734;</span>)
                    return (
                    <>
                        <div className="ratings">
                            <span key={'empty'+_} className='empty-stars'></span>
                            <span key={'fill'+_} className='full-stars' style={{width: _ <= Math.floor(rating) ? "100%" : _ > Math.ceil(rating)? '0%': (rating%1*100).toString()+'%'}}></span>
                        </div>
                    </>
                    )
                })}
        </div>
        {/* <label htmlFor="starRating">
        </label> */}
        <div className="flex w-75">
            <input name="starRating" id="starRating" style={{width:'50vw'}} type="range" value={rating} min="0" max={arr.length} step="0.05" onChange={updateRating} />
            <span className="text-5xl pl-10 w-32">{rating}</span>
        </div>
        <div className="text-xl pt-20">Move slider to change rating</div>
    </div>
  )
}

export default StarRating