import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import Footer from './components/navigation/Footer';
import PageHome from './components/pages/home/PageHome';
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
      <Footer />
    </>
  );
}
