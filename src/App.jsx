import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  // console.log(window.location)
  // let Component
  // switch (window.location.pathname) {
  //   case "/personal-website":
  //     Component = Homepage
  //     break
  //   case "/personal-website/projects":
  //     Component = Homepage
  // }

  return (
    <div>
      <Navbar />
      <div className='space'></div>
      <Routes>
        <Route path="/personal-website" element={<Homepage/>} />
        <Route path="/personal-website/projects" element={<Projects/>} />
        <Route path="/personal-website/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App;
