import React, { useState, useEffect } from 'react'
import Filter from '../components/Filter'
import ListStories from '../components/ListStories'

const MainContainer = () => {

  const [stories, setStories ] = useState( [] )

  useEffect(() => {

    function fetchStories(){
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json ')
      .then ( res => res.json() )
      .then( data => { 
        const storyPromises = data.slice(0,60).map(storyId => {
          return   fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
          .then ( res => res.json() )
        })
          Promise.all(storyPromises).then(storydata => {
            setStories(storydata)
          })
      })

    }
    fetchStories()
  
  },[])


  return (
    <div>
        <h1>Main stuff</h1>
        <Filter/>
        <ListStories stories={stories}/>
      
    </div>
  )
}

export default MainContainer
