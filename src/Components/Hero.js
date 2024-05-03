import Image from "next/image"
import Right from "./Icons/Right"
export default function Hero(){
  return(
    <section className="hero md:mt-4">
      <div className="md:py-12 py-8">
      <h1 className="text-4xl leading-normal font-semibold">Handmade, <br></br>With an Extra <br/>Pinch of <span className="text-primary ">Love</span></h1>
      <p className="my-6 text-gray-500 text-sm text-justify">Craving pizza? With Slice of Simplicity, satisfy your appetite quickly and effortlessly! Explore a vast menu of mouthwatering pizzas, customize your toppings, and order your favorite pie with just a few taps.</p>
      <div className="flex gap-4">
        <button className="px-8 py-2 bg-primary rounded-full flex gap-2 text-white">Order Now
        <Right/>
        </button>
        <button className="px-4 py-2 text-gray-600  rounded-full font-bold flex gap-2 ">Learn More
        <Right/>
        </button>
      </div>
      </div>
      <div className="relative hidden  md:block">
      <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
      
    </section>
  )
}