import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import Sidebar from "./containers/Sidebar/Sidebar";


export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidebar />
      <Footer />

    </div>
  );
} 
