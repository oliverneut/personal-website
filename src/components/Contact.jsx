import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const Contact = () => {
    return <div className='contact'>
        <h3>Get in touch ...</h3>
        <a href="https://www.linkedin.com/in/oliver-neut/"><img src={linkedin} alt="" /> </a>
        <a href="https://github.com/oliverneut"><img src={github} alt="" /></a>
        <a href="mailto:oliver.neut@gmail.com">oliver.neut@gmail.com</a>
    </div>
     
}

export default Contact