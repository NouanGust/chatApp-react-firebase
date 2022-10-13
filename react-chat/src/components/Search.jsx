import React from 'react'

const Search = () => {
  return (
    <div className='search'>

      <div className="searchForm">
        <input type="text" placeholder='Procure um usúario' />
      </div>

      <div className="userChat">
        <img src="https://i.pinimg.com/550x/19/95/ce/1995ce591ba44b40a92d1ed88c64c95a.jpg" alt="" />
        <div className="userChatInfo">
          <span>Kidman</span>
        </div>
      </div>
    </div>
  )
}

export default Search;