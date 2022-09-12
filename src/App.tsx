import clsx from "clsx";
import './i18n';
import Header from "./components/Header";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import "./App.css";
import Hero from "./components/Hero";
export interface props {className?:string}
const App=({className}:props)=> {
  return (
    <div className="flex flex-col min-h-screen mx-auto ">
      <Header />
      <div className="flex-1">
        <Hero />
        <Biography />
      </div>
      <Footer />
    </div>
  );
}

export default App;
