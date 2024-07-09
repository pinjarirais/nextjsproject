"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Layout = ({children}) => {
    const pathname = usePathname();
  return (
    <div>
      <nav className="flex w-full">
        {
            pathname !== "/login/loginteacher" ?
            <ul className="flex w-full text-blue-700">
            <li>
                <Link href="/login">Login</Link>
            </li>
            <li className="pl-4">
                <Link href="/login/loginstudent">Login Student</Link>
            </li>
            <li className="pl-4">
                <Link href="/login/loginteacher">Login Teacher</Link>
            </li>
        </ul>
        :null
        }
        
      </nav>
      
      {children}
    </div>
  )
}

export default Layout;
