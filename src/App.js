import HederSlid from "./component/HederSlid";
import Test from "./component/Test";
import StatsBanner from "./component/StatsBanner";
import TrustedClients from "./component/TrustedClients ";
import Welcome from "./component/Welcome";
import ClientLogojs from "./component/ClientLogo.js";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <HederSlid/>
      <Welcome/>
      <br />
     <Test/>
     <StatsBanner/>
     <TrustedClients/>
     <ClientLogojs/>
     <Footer/>

     
    
    </div>
  );
}

export default App;
