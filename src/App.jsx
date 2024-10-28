import Credentials from "./components/Footer/Credentials";
import JobCategory from "./components/JobCategory";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Hero";
import Featured from "./components/Featured";
import Amdin from "./components/Admin"
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <JobCategory />
      <Credentials />
      {/* <Amdin /> */}
    </>
  );
}

export default App;
