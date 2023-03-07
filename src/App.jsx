import { useState } from 'react'
import './App.css'

const Rating = ({ name, rate, content }) => {
  return (
    <div>
      <h3>Rating</h3>
      {
        [...Array(5).keys()].map((item,index) => {
          return <span key={index}>
            {index<rate?<>&#9733;</>:<>&#9734;</>}
          </span>
        })    
      }
      <h3>{name}</h3>
      <p>{content }</p>
     </div>
   )
}
const AverageRating = ({ rating }) => {
  const totalRate=rating.map((item)=>item.rate).reduce((a,b)=>a+b)
  const aveRate = Math.ceil(totalRate / rating.length)
  return (
    <div>
      <h3>Average Rating</h3>
      {
        [...Array(5).keys()].map((item,index) => {
          return <span key={index} >
            {index<aveRate?<>&#9733;</>:<>&#9734;</>}  
          </span>
        })  
      }
    </div>
  )
}

function App() {
  const rating = [
    {
      id:0,
      name: 'Elias',
      content: 'I like this product',
      rate:4
    },
   { id:1,
       name: 'Kibret',
       content: "it's good ,I Like it some how",
      rate:3
      },
     { id:2,
       name: 'Lidia',
       content: 'I hate this product',
       rate:0
     },
   ]
  return (
    <div className="App">
      <AverageRating rating={rating} />
      {
        rating.map((item,index) => {
          return (
            <Rating key={item.id} {...item} />
          )
        })
    }
    </div>
  )
}
export {Rating,AverageRating}
export default App
                                   