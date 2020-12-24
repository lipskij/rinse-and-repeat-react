import './Home.css';
import images from './images';

const Home = () => {

  return (
    <div className="home">
      <h2>Homepage</h2>
      <div className="images">
        {images.map(({id, src}) => <img alt='bike' key={id} src={src}/>)}
      </div>
    </div>
  );
};

export default Home;
