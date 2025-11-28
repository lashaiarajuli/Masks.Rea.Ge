import HomeImg from '/Photos/12.png';
import './home.css'
import './responsive.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>
        შეიძინე ნიღაბი ჩვენთან <br />
        და მზად იყავი<br />
        <span className="span1">წვეულებისთვის</span>
      </h1>

      {/* Replace with your actual image path/component */}
      <img className="img2" src={HomeImg} alt="Home Mask" />
    </section>
  );
};

export default Home;