import Hero from "@/Components/Hero";
import Header from "@/Components/Layout/Header";
import HomeMenu from "@/Components/Layout/HomeMenu";
import SectionHeaders from "@/Components/Layout/SectionHeaders";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <HomeMenu/>
    <section className="text-center my-16">
      <SectionHeaders
      subHeader={'Our story'}
      mainHeader={'About us'}
      />
      <p>
      At Aurelia Pizza, we pride ourselves on using only the freshest, highest-quality ingredients. Each pizza is handcrafted with love, and our dough is made fresh daily, ensuring a perfect base every time. From the classic Pepperoni to our gourmet selections, each slice tells a story of culinary craftsmanship.

      <p>Our dedication goes beyond just pizza. We believe in creating a warm, welcoming environment where family and friends can gather to share meals and memories. Whether you are ordering online for a cozy night in or visiting us in one of our friendly locales, we are here to serve you with a smile and a slice.</p>


      </p>

    </section>
    </>
  );
}
