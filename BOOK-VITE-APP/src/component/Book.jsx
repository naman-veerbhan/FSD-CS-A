import React from 'react'
import './Book.css'
const Book = () => {
  return (
    <div className="card">
      <img src="https://imgs.search.brave.com/pXHg44B5_PhZ2DafQhyzyZOIWokDSVTo351_TOx9jPU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE0/OTIyNDEzNi9waG90/by9yZWFkaW5nLWFu/ZC1vcGVuLWJvb2st/cGFnZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VER6MzA2/R2VEWFpRS3QxYTJl/MkpnXzlTaUxtRmxO/SGhWYXNSVk1FcnJL/cz0" alt="book image" width={200} height={200}></img>
      <h3>Title: Physics</h3>
      <h4>Price: ₹456/-</h4>
      <br></br>
      <button>add To Cart</button>
    </div>
  )
}

export default Book
