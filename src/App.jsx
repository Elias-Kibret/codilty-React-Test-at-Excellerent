import { useState } from 'react'
import './App.css'

const Rating = ({ name, rate, content }) => {
  const array = [...Array(rate).keys()]
  
  return (
    <div>
      <h3>Rating</h3>
      {
        [...Array(rate).keys()].map((item,index) => {
          return <span key={index}>&#9733;
            
          </span>
        })
        
        
      }
      {
        [...Array(5-rate).keys()].map((item,index) => {
          return <span key={index}>&#9734;</span>
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
        [...Array(aveRate).keys()].map((item,index) => {
          return <span key={index}>&#9733;
            
          </span>
        })
        
        
      }
      {
        [...Array(5-aveRate).keys()].map((item,index) => {
          return <span key={index}>&#9734;</span>
        })
      }
    </div>
  )
}

function App() {
  const rating = [
    {
      name: 'Elias',
      content: 'I like this product',
      rate:5
    },
    {
      name: 'Kibret',
      content: "it's good ,I Like it some how",
      rate:4
    },
    {
      name: 'Lidia',
      content: 'I hate this product',
      rate:2
     },
   ]
  return (
    <div className="App">
      <AverageRating rating={rating} />
      
      {
        rating.map((item,index) => {
          return (
            <Rating key={index} {...item} />
          )
        })
    }


    </div>
  )
}
export {Rating,AverageRating}
export default App