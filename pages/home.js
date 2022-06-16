import NavBar from "../components/home/NavBar";
import Banner from "../components/home/banner";
import Footer from "../components/home/Footer";
import Cards from "../components/Cards";

function HomeScreen() {
    return ( 
        <div>
        <NavBar/>
        <Banner/>
        <Cards />
        <Footer />
        </div>
     );
}

export default HomeScreen;