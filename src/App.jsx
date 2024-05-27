import Banner from "./components/Banner";
import Header from "./components/Header";
import Board from "./components/Board";
import DownloadButton from "./components/DownloadButton";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="bg-red-100 min-h-screen mx-auto">
      <Header/>
      <Banner/>
      <Board/>
      <DownloadButton/>
      <Footer/>
    </div>
  ) 
};

export default App;