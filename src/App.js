
import { SecondBlock } from "./components/second-block";
import { FiveBlock } from "./components/five-block";
import { MainPage } from "./components/MainPages";
import { AboutUs } from "./components/AboutUs";
import { Fitnes } from "./components/Fitnes";
import { Service } from "./components/Service";
import { Blog } from './components/Blog';
import { Blog2 } from "./components/Blog2";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className="App">
      <MainPage/>
      <SecondBlock/>
      <AboutUs/>
      <Fitnes/>
      <FiveBlock/>
      <Service/>
      <Blog/>
      <Blog2/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
