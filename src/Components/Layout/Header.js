import Link from "next/link"
import Image from "next/image"
export default function 
Header() {
return(
  <>
    <header className="flex items-center justify-between">
      <Link href=''
      className="text-primary font-semibold text-2xl">
      Aurelia Pizza
      </Link>
      <nav className="flex gap-8 text-gray-500 items-center font-semibold">
      {/* <Image src={'/pizzon.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /> */}
        <Link href={''}>Home</Link>
        <Link href={''}>PRODUCTS</Link>
        <Link href={''}>PAGES</Link>
        <Link href={''}>BLOG</Link>
        <Link href={''}
        className="bg-primary text-white  px-8 py-2 rounded-full">Login</Link>
      </nav>
    </header>
  </>
)
}
