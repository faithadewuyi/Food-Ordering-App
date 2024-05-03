import Link from "next/link"
export default function Header() {
return(
  <>
    <header className="flex items-center justify-between">
      <Link href=''
      className="text-primary font-semibold text-2xl">
      Aurelia Pizza
      </Link>
      <nav className="flex gap-8 text-gray-500 items-center font-semibold">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''}
        className="bg-primary text-white  px-8 py-2 rounded-full">Login</Link>
      </nav>
    </header>
  </>
)
}
