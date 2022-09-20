// import resume from '../assets/Resume_Oliver.pdf'
import profile_picture from '../assets/profile_pic.jpeg'

const About = () => {
    return <div class="about_component">
        <h1>About me</h1>
        <img src={profile_picture} width="20%" alt="" />
        <a href="/Resume_oliver.pdf" download>Download resume</a>
    </div>
}

export default About