import React from 'react'

const ListStories = ({stories}) => {
  return (
      <>
      {stories.map((story) => (
        <div key={story.id}>
         
            <p key={story.id}> <b>{story.title}</b> <br/>{story.by} <br/> {story.url}</p>
            {/* <a key={story.id} href='{stroy.url}'> Click here</a> */}

        </div>

    
        ))}
        </>

  )
}

export default ListStories
