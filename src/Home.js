import './Home.css';
import ImageSlider from './ImageSlider';
import {ImageData} from './ImageData';

const Home = () => {
  return (
    <div className="home">
      <h2>Bikes</h2>
      <div className="images">
        <ImageSlider slides={ImageData}/>
      </div>
    </div>
  );
};

export default Home;
