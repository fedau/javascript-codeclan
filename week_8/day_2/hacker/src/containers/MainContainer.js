import React, { useState, useEffect } from 'react'
import Filter from '../components/Filter'
import ListStories from '../components/ListStories'

const MainContainer = () => {

  const [stories, setStories ] = useState( [] )
  const [filteredStories, setfilteredStories ] = useState( [] )


 const filterData = (searchTerm) => {
    const filteredData = stories.filter(story => {
      return story.title.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setfilteredStories(filteredData)
  }

  useEffect(() => {

    function fetchStories(){
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json ')
      .then ( res => res.json() )
      .then( storyIds => { 
        const storyPromises = storyIds.slice(0,30).map(storyId => {
          return   fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
          .then ( res => res.json() )
        })
          Promise.all(storyPromises)
          .then(storydata => {
            setStories(storydata);
            setfilteredStories(storydata);
          })
      })

    }
    fetchStories()
  
  },[])




  return (
    <>
        <h1>Main stuff</h1>
        <Filter filterData={filterData}/>
        <ListStories stories={filteredStories}/>
      
    </>
  )
}

export default MainContainer
