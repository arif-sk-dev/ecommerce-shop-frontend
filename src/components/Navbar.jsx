import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //header Scrolling drop Shadow & bg color
  useEffect(() => {
      const changeNavbar = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", changeNavbar);
    }, []);


  // useEffect (()=> {
  //   const handleScroll = ()=> {
  //     if(window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return ()=> {
  //     window.addEventListener('scroll', handleScroll);
  //   }
  // }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-1 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-lg" : "" }`}>
      <nav className='container max-w-screen-2xl mx-auto flex justify-between items-center py-2 px-4'>
        <Link to="/" className='text-1.5xl font-bold'>SHOP</Link >

        {/* Desktop Menu Item  */}
        <div className='flex-col md:flex-row items-center md:space-x-8 gap-5 hidden md:flex text-lg'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Shop</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Blog</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-400 font-medium border-b-2" : "hover:text-red-400"}>Contact</NavLink>

          {/* Shopping Cart icon  */}
          <NavLink to="/cart" className='md:block cursor-pointer relative'>
            <FaShoppingCart className='text-xl' />
            <sup className='absolute -top-2.5 -right-2.5 bg-red-400 text-white w-4.5 h-4.5 rounded-2xl flex items-center justify-center text-xs'>0</sup>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

