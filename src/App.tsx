
import Header from './Interface/Header';
import HomePage from './Interface/Homepage';
import Collection from './Interface/Collection';
import Shop from './Interface/Shop';
import Offer from './Interface/Offer';
import Blog from './Interface/Blog';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <HomePage />
      </div>
      <div id="collection">
        <Collection />
      </div>
      <div id="shop">
        <Shop />
      </div>
      <div id="offer">
        <Offer />
      </div>
      <div id="blog">
        <Blog />
      </div>
    </>
  );
}

export default App;
