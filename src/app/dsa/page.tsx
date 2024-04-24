'use client'
import React from 'react'
import { execute } from '../../DSA/Tree/tree'

const DSA = () => {
  const treeTraversal = () => {
    execute()
  }
  return (
    <div className="p-8">
        <div>DSA Tree</div>
        <button 
            className='border-2 border-solid border-white p-2 rounded'
            onClick={treeTraversal}>
                Tree Traversal
        </button>
    </div>
  )
}

export default DSA