import React from 'react'

function CountRating({count, ChangingRating=()=>{}}) {
    let tabstars=[]
    for (let i=0; i< 5; i++) {
        if (i < count){
        tabstars.push(<span onClick={()=> ChangingRating(i+1)} key={i}>★</span>)  
        }else {
            tabstars.push(<span onClick={()=> ChangingRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{tabstars}</div>
    )
}
export default CountRating