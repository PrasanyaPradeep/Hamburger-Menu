import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-small-device"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-large-device"
      />
    </div>
  </div>
)

export default Home
