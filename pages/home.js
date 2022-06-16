import NavBar from "../components/home/NavBar";
import Banner from "../components/home/banner";
import Footer from "../components/home/Footer";
import Cards from "../components/home/Cards";
import { getProducts } from "../components/logics/firestoreLogics";
import { useEffect, useState } from "react";

function HomeScreen() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        });
    }, []);

  return (
    <div>
      <NavBar />
      <Banner />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
                <Cards key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
