import HederSlid from "./component/HederSlid";
import Test from "./component/Test";
import StatsBanner from "./component/StatsBanner";
import TrustedClients from "./component/TrustedClients ";
import Welcome from "./component/Welcome";
import ClientLogojs from "./component/ClientLogo.js";
import Footer from "./component/Footer";
import PostCard from "./component/LatesNews";
import Janth from "./component/Janth";
function App() {
  return (
    <div className="App">
      <HederSlid/>
      <br />
      <Welcome/>
      <br />
     <Test/>
     <br />
     <StatsBanner/>
     <br />
     <TrustedClients/>
     <br />
     <ClientLogojs/>
     <br />
    <PostCard/>


     <Janth/>
   
     
    
    </div>
  );
}

export default App;
