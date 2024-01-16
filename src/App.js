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
    <div className="App bg-cover" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2013/08/06/05/27/clouds-170135_1280.jpg')", height: "100vh"}}>
      <div className="container mx-auto">
        <Header/>
        <Display/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
