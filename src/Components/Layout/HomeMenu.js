import Image from "next/image"
import MenuItems from "../Menu/MenuItems"
export default function HomeMenu(){
  return(
   <section>
    <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
     <div className="text-center mb-4">
      <h3 className=" text-gray-500 font-semibold leading-3">CHECK OUT</h3>
      <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
      <MenuItems/>
    </div>
   </section>
  )
}