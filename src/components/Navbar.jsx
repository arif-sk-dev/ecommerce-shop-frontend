import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-5 transition duration-300 ease-in-out">
      <nav className='container max-w-screen-2xl mx-auto flex justify-between items-center py-5 px-4'>
        <Link to="/" className='text-1.5xl font-bold'>SHOP</Link >

        {/* Desktop Menu Item  */}
        <div className='flex-col md:flex-row items-center md:space-x-8 gap-8 hidden md:flex'>
          <NavLink to="/" className={({isActive}) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}>Shop</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}>Blog</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "text-red-400 font-medium underline" : "hover:text-red-400"}>Contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

