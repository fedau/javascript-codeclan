import React from 'react'
import StoryItems from './StoryItems'

const ListStories = ({stories}) => {
    const storyItemNodes = stories.map((story, index) =>{
        return <StoryItems key={index} story={story}/>
    })
  return (
      <>
 <ul>
    {/* <StoryItems stories={storyItemNodes}/>
     */}
     {storyItemNodes}
 </ul>
        </> 

  )
}

export default ListStories
