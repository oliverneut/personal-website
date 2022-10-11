import img1 from '../assets/0686.jpg'
import img2 from '../assets/0689.jpg'
import img3 from '../assets/0693.jpg'
import img4 from '../assets/1.jpg'
import img5 from '../assets/2.jpg'
import img6 from '../assets/3.jpg'
import img7 from '../assets/4.jpg'
import img8 from '../assets/5.jpg'
import img9 from '../assets/6.jpg'
import img10 from '../assets/7.jpg'
import img11 from '../assets/8.jpg'
import img12 from '../assets/9.jpg'

const Projects = () => {
    return <div className='projects'>
        <h1>Film photography</h1>
        <div className='photo_gallery'>
            <div className='column'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img10} alt="" />
            </div>
            <div className='column'>
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img8} alt="" />
                <img src={img11} alt="" />
            </div>
            <div className='column'>
                <img src={img7} alt="" />
                <img src={img6} alt="" />
                <img src={img9} alt="" />
                <img src={img12} alt="" />
            </div>
        </div>
        <div className='movies'></div>
    </div>
}

export default Projects