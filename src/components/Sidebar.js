import Png from '../img/add.png'

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='navbar'>
      <span className='logoHome'>Sümer Chat</span>
      <img src={Png} alt="" className='avatar' />
      <span className='name'>Esra Sümer</span>
      <button className='logOut'>logOut</button>
    </div>
    <div className='chats'>
      <input type="text" />
    </div>
  </div>
  )
}

export default Sidebar