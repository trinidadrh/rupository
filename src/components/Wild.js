import React from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Navbar'

const Wild = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <header>
        <h4 className="center">Out in the Wild</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </header>
      <section>
        <header>
          <h2>SONGS</h2>
          <p>queens perform songs</p>
        </header>
        <section class='video-section'>
        <div class='video'>
            <h4>drop dead gorgeous</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=qpOl9tld5zg'/>
          </div>
          <div class='video'>
            <h4>my pussy is like a peach</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=O_w_A58s_O8'/>
          </div>
          <div class='video'>
            <h4>boom boom</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=HiAH9nOkspM'/>
          </div>
        </section>
      </section>
      <section>
        <header>
          <h2>SCENES</h2>
          <p>queens perform skits and tricks</p>
        </header>
        <section class='video-section'>
          <div class='video'>
            <h4>the brain</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=KOQQghEvjEM'/>
          </div>
          <div class='video'>
            <h4>kimonogate</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=QZOJwIXs3-w'/>
          </div>
          <div class='video'>
            <h4>trixie katya raja raven</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=xUtKgqq4epM'/>
          </div>
          <div class='video'>
            <h4>dragcon</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=esLZMwy2iRw&t=3s'/>
          </div>
          <div class='video'>
            <h4>runway</h4>
            <ReactPlayer url='https://www.youtube.com/watch?v=DWseixzSl2M'/>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Wild