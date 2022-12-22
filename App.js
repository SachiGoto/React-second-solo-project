import React from 'react'
import Main from './components/Main'
import data from './data'

export default function App(){
    // console.log(data)
   
    const items = data.map(item=>{
        return <Main key={item.id} {...item} />
        
    })
    
    // console.log("items is " , items)
    
    return(
      <div>
      <div className="website-header">
      <h1 className="website-title"><i class="fa-solid fa-earth-americas"></i>My Travel Journal</h1>
      </div>
      {items}
      </div>
    )
}