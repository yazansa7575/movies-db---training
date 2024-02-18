import Navebar from "./comp/navebar";
import ListCard from "./comp/listCard";
import Footer from "./comp/footer";
import Load from "./comp/load";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./comp/movieDetails";


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navebar />
          <Load />
          <Routes>
            <Route path="/" element={<ListCard />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
