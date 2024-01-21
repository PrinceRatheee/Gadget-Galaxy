import Hero from "../components/Hero";
import Buds from "../components/Buds";
import God from "../components/God";
import Topsection from "../components/Topsection";
import Bestproducts from "../components/Bestproducts";
import Sale from "../components/Sale";
import SliderBuds from "../components/SliderBuds";
import Categories from "../components/Categories";
import BoatBanner from "../components/BoatBanner";
import NewAdd from "../components/NewAdd";
import Brands from "../components/Brands";
// import Hscroll from "../components/Hscroll";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
export const dynamic="force-dynamic";

export default function Home() {
  return (
    <section>
      <br /><br /><br /><br /><br />
      <Topsection/>
      <SliderBuds/>
      
      <Hero/>
      <Bestproducts/>
      <Buds/>
      <God/>
      <Categories/>
      <BoatBanner/>
      <NewAdd/>
      <Sale/>
      <Brands/>
      {/* <Hscroll/> */}
      <WhyUs/>
      <Footer/>
    </section>
      

  )
}

