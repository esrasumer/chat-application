import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search;