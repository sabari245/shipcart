import NavBar from "../components/NavBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Banner from "../components/banner";

function HomeScreen() {
    return ( 
        <div>
        <NavBar />
        <Banner />
        <div class="flex display-flex flex-wrap justify-center justify-between m-5"><Card /><Card /><Card /><Card /></div>
        <div class="flex display-flex flex-wrap justify-center justify-between m-5"><Card /><Card /><Card /><Card /></div>
        <div class="flex display-flex flex-wrap justify-center justify-between m-5"><Card /><Card /><Card /><Card /></div>
        <Footer />
        </div>
     );
}

export default HomeScreen;