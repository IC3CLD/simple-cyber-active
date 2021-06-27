import './App.css';
import Header from './components/header/Header';
import Section from "./components/section/Section";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <div className={"main__container"}>
     <Header/>
     <Section/>
     <Form/>
     <Footer/>
   </div>
  );
}

export default App;
