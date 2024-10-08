'use client'
import { removeUser } from "@/reducer/slices/loginUserSlice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

const Header = () => {
 const {user}    =  useSelector((state) => state.loginUserData)
  const dispatch = useDispatch();
  const router   = useRouter()

  const logoutUser = async() =>{
    console.log("in logout function");
    
    dispatch(removeUser())
    Cookies.remove('authToken')
    router.push("/login")

  }
  return (
   <nav className=" bg-slate-200 py-4 ">
    <div className="container- mx-auto flex items-center justify-between px-4">
    <div className="brand">E-Com</div>
       <ul className="flex ml-auto">
        <li className="px-4"><Link href={"/"} className="text-black hover:text-slate-400">Home</Link></li>
        <li className="px-4"><Link href={ "/about-us" }className="text-black hover:text-slate-400">About Us</Link></li>
        <li className="px-4"><Link href={ "/contact-us" } className="text-black hover:text-slate-400">Contact Us</Link></li>
       
        {
        user!=null ? (
            <>
            <li className="px-4"><a href="" className="text-black hover:text-slate-400">{` Hello ${user.firstName} `}  </a></li>
            <li className="px-4"><a className="text-black hover:text-slate-400" onClick={logoutUser}>Log Out</a></li>
            </>
        ) : (
            <>
            <li className="px-4"><Link href={"/login"} className="text-black hover:text-slate-400">Login</Link></li>
            <li className="px-4"><Link href= {"/signup"} className="text-black hover:text-slate-400">Sign Up</Link></li>
            </>
        )
        }  
      </ul> 
    </div>
   </nav>
  );
};

export default Header;
