// import image from "./bgimg.jpg"
import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
    // const myStyle = {
    //   backgroundImage: 
    //       "url('/public/img/bgimg.jpg')",
    //   height: "110vh",
    //   marginTop: "-70px",
    //   fontSize: "50px",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // };
  
  return (
    <div className="App">
      <div className="container mx-auto">
        <Header/>
        <Display/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
