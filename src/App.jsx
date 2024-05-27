import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen mx-auto">
      <Header/>
      <div>
        <img className="w-full h-[460px] object-cover" src="../images/zigbangWeb_heroImg_1440.jpg"/>
      </div>
    </div>
  ) 
};

export default App;