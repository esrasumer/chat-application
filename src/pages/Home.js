import {Chat,Chats,Input,Message,Navbar,Search,Sidebar} from '../components'
import Png from '../img/add.png'
import Cam from '../img/cam.png'
import More from '../img/more.png'


function Home() {
  return (
    <div className='bigContainer'>
      <Sidebar />
      <div className='chatPanel'>
        <div className='chatBar'>
          <span>name</span>
          <img src={Cam} alt="" />
          <img src={Png} alt="" />
          <img src={More} alt="" />
        </div>
        <div className='mesasages'></div>
        <input type="text" className='inputHome'/>
      </div>
    </div>
  )
}

export default Home