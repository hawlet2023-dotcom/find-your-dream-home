import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import WhyChooseUs from "./components/WhyChooseUs";
import PopularResidences from "./components/PopularResidences";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <WhyChooseUs />
      <PopularResidences />
      <About/>
    </>
  );
}

export default App;