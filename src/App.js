import './bootstrap.css';
import './App.css';
import Cards from './items';
import img from './img.png'


function App() {
  const image = { src: img }
  
  return (
    <div className="App">
      <Cards image={image}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </Cards>
      <Cards>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </Cards>
    </div>
  );
}

export default App;