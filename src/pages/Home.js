import { Chat, Chats, Input, Message, Navbar, Search, Sidebar } from '../components'
// import Png from '../img/add.png'
// import Cam from '../img/cam.png'
// import More from '../img/more.png'


function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home