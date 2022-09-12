import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Navbar />
      <img src="../public/0693.jpg"  alt="" />
      <div className='space'></div>
      <div className="homepage">
          <div className='about_section'>
            <About />
          </div>
        <span id='#projects' >
          <div className='projects_section'>
            <div><h2>projects</h2></div>
          </div>
        </span>
        <div className='contact_section'>
          <div><h2>contact</h2></div>
        </div>
      </div>
      <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
