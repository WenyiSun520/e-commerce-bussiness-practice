
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/MainPage/HomePage.js'
import MechantPage from './Components/MechantPage/AddProduct.js'
import Header from './Components/Header.js'
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mechant" element={<MechantPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
