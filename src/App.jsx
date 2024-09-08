
import Credentials from './components/Footer/Credentials';
import JobCategory from "./components/JobCategory";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero";
import Featured from "./components/Featured";
import JobListing from './components/JobListing';
function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Featured/> 
      <JobCategory/>
      <Credentials/>     
      
    </>
  );
}

export default App;