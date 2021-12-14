import logo from "./logo.svg";
import Navbar from "./Navbar";
import PictureCard from "./PictureCard";
import Footer from "./Footer";
const Data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  return (
    <div>
      <Navbar />
      <div className="row">
        {Data.map((c) => (
          <div className="col-md-3">
            <PictureCard />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
