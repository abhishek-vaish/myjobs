import "./App.css";
//components
import HeroSection from "./components/HeroSection";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <div>
        <HeroSection />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
