import NavBar from "../components/home/NavBar";
import Card from "../components/home/Card";
import Footer from "../components/home/Footer";
import Banner from "../components/home/banner";

function HomeScreen() {
    return ( 
        <div>
        <NavBar />
        <Banner />
        <div class="flex display-flex flex-wrap justify-center justify-between">
            {
                [1,2,3,4,5,6,7,8,9,10].map(item => {
                    return (
                        <div className="m-2">
                            <Card />
                        </div>
                    )
                })
            }
        </div>
        <Footer />
        </div>
     );
}

export default HomeScreen;