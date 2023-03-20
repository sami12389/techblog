import React from 'react'

const Author = ({author}) => {
  return (
    <div className = "mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div>
      <img 
      alt = {author.name}
      height = "120px"
      width = "100px"
      className = "align-middle rounded-full"
      src = {author.photo.url}/>
      </div>
      <div className = "mt-8">
      <h3 className = "text-white text-xl font-bold">{author.name}</h3>
      <p className = "text-white text-lg">{author.bio}</p>
      </div>
    </div>
  )
}

export default Author