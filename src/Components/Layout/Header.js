import Link from "next/link"
import Image from "next/image"
export default function 
Header() {
return(
  <>
    <header className="flex items-center justify-between">
      
      <nav className="flex gap-8 text-gray-500 items-center font-semibold">
      <Link href='/'
      className="text-primary font-semibold text-2xl">
      Aurelia Pizza
      </Link>
      {/* <Image src={'/pizzon.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /> */}
        <Link href={'/'}>Home</Link>
        <Link href={''}>PRODUCTS</Link>
        <Link href={''}>PAGES</Link>
        <Link href={''}>BLOG</Link>
       
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={'/login'}>Login</Link>
      <Link href={'/register'}
        className="bg-primary text-white  px-8 py-2 rounded-full">
          Register
        </Link>
      </nav>
    </header>
  </>
)
}
