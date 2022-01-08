import React from 'react'
import '../style.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <div className="container">
        <Navbar></Navbar>
        <header>
          <h4 className="center">Home</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
        </header>
      </div>
    </div>
  )
}

export default Home