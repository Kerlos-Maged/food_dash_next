'use client'
import Link from "next/link";
import Image from "next/image";
import { routes } from "../../constants";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  const pathname = usePathname();
  const isLoggedIn = true;

  return (
    <header className='bg-l_orange'>
      <div className="container h-20 flex justify-between items-center">
        {/* LOGO CONTAINER  */}
        <Link href={'/'} className="cursor-pointer">
          <Image src={'/Frame 18.png'} alt="" width={170} height={70} />
        </Link>
        {/* CENTER CONTAINER  */}
        <div className="hidden md:flex items-center justify-between gap-8 ">
          {
            routes.map((e) => {
              return (
                <Link href={e.path} key={e.label} className={`font-semibold hover:text-black ${e.path === pathname ? "text-black" : "text-font-gray"}`}>
                  {e.label}
                </Link>
              )
            })
          }
        </div>
        {/* RIGHT CONTAINER  */}
        <div className="hidden md:flex gap-4 items-center">
          {/* <SearchInput/> */}
          <div className="">
            {
              isLoggedIn === true ?
                <Button className="" variant={'primary'}>
                  Login
                </Button>
                :
                <div className="hidden md:flex gap-2">
                  <Image src={'/user.svg'} width={40} height={40} alt='avatar' className=' cursor-pointer w-[40px] h-[40px] ring-2 ring-primary rounded-full p-1' />
                  <div className="size-[40px] p-1.5 rounded-full cursor-pointer ring-2 ring-primary">
                    <Image src={'/shopping-cart.svg'} width={40} height={40} alt="" className='size-full object-contain' />
                  </div>
                </div>
            }
          </div>
        </div>
        {/* MOBILE CONTAINER  */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Image src={'/menu.svg'} width={50} height={50} alt="" className='size-[35px] cursor-pointer' />
            </SheetTrigger>
            <SheetContent className={'bg-l_orange lg:hidden'}>
              <SheetHeader className="flex items-start justify-center">
                <SheetTitle>
                  <Link href={'/'} className="cursor-pointer">
                    <Image src={'/Frame 18.png'} alt="" width={170} height={70} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col w-full py-8 gap-8">
                {
                  routes.map((e) => {
                    return (
                      <Link
                        href={e.path}
                        key={e.label}
                        className={`font-semibold w-full text-center hover:bg-primary hover:text-white py-3 rounded-xl ${e.path === pathname ? "bg-primary text-white" : "text-font-gray"}`}>
                        {e.label}
                      </Link>
                    )
                  })
                }
              </div>
              <Button className="w-full" variant={'primary'}>
                <Link href={'/login'}>Login</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  )
}

export default Navbar
