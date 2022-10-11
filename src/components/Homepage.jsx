import About from './About';
import Footer from './Footer';
import profile_picture from '../assets/profile_pic.jpeg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Homepage = () => {
    return (<> <div className="homepage">
        <div className='about_section'>
        <div class="about_component">
            <div className='about_component_text'>
            <h1>About me</h1>
            <p>I am Oliver Neut, currently 22 years old. Since I started studying Computer Science & Engineering, the field has never ceased to amaze and interest me. In the near future, I am planning to pursue a career in the tech industry.  Besides the fact that I am a computer science student, I also admire other subjects such as finance, innovation, and entrepreneurship.</p>
            <br />
            <p>Since I am part of an active investment club (Dalton Investment Group), I have learned to manage a portfolio while working as a group to make decisions and conduct meetings on a regular basis. The investing I have learned to love and I often find myself engaging with news regarding the stock market and the economy that we're all part of.</p>
            <br />
            <a className='resume' href="./Resume_Oliver.pdf" download='Resume_Oliver_Neut' >Download resume</a>
            </div>
            <img className='profile_picture' src={profile_picture} width="20%" alt="" />
        </div>
        </div>
        <div className='education_section'>
        <div className='education_component'>
            <h1>Education</h1>
            <div className='education_component_text'>
            <p>Delft University of Technology</p> <p>Delft, Netherlands</p>
            <p>BSc Computer Science & Engineering</p> <p> Sep 2018 - Jun 2022</p>
            <p>Nova School of Science & Technology</p> <p>Lisbon, Portugal</p>
            <p>Erasmus+ Exchange Semester</p> <p>Sep 2021 - Feb 2022</p>
            </div>
        </div>
        </div>
        <div className='extracurricular_section'>
        <div className='extracurricular_component'>
            <h1>Extracurricular activities</h1>
            <div className='extracurricular_component_text'>
            <p>Dalton Investment Group</p> <p>Antwerp, Belgium</p>
            <p>Technology sector analyst</p> <p>Sep 2019 - Now</p>
            <p>Interests</p> <br /> <p>skiing, golf, film photography, computer vision, blockchain technology, machine learning, image processing, conceptual art, interior design, music, cooking, finance, mathematics</p>
            </div>
        </div>
        </div>
        </div>
        <div className='Footer'>
        <div className='socials'>
        <p>Get in touch ...</p>
        <a href="https://github.com/oliverneut"><img src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/oliver-neut/"><img src={linkedin} alt="" /> </a>
        <a href="mailto:oliver.neut@gmail.com">oliver.neut@gmail.com</a>
        </div>
        </div>
    </>)
}

export default Homepage