import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Frame from './Components/MainFrame/Frame';
import mainimage from './Assets/mainimage.jpg'
function App() {
  return (
    <div className="App">
   <Navbar/>

   <img src={mainimage} alt="" />
     <Frame/>
    </div>
  );
}

export default App;
