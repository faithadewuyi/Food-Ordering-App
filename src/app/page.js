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
      <div className="max-w-md  text-gray-500 mx-auto mt-4 flex flex-col gap-4">
      <p>
      At Aurelia Pizza, we pride ourselves on using only the freshest, highest-quality ingredients. Each pizza is handcrafted with love, and our dough is made fresh daily, ensuring a perfect base every time. From the classic Pepperoni to our gourmet selections, each slice tells a story of culinary craftsmanship.</p>

      <p>Our dedication goes beyond just pizza. We believe in creating a warm, welcoming environment where family and friends can gather to share meals and memories. Whether you are ordering online for a cozy night in or visiting us in one of our friendly locales, we are here to serve you with a smile and a slice.</p>
      </div>
    </section>
    <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Need to Reach Us?'}
        mainHeader={'Contact Us'}
        />
       <div className="mt-8">
       <a className="text-3xl underline text-gray-500" href="tel:+2348100322494">+2348100322494
        </a>
       </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
