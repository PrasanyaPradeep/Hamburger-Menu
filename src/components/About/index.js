import Header from '../Header'
import './index.css'

const About = () => (
  <div className="main-container">
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-small-device"
      />

      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-large-device"
      />
    </div>
  </div>
)

export default About
