import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobile, setMobile] = useState(false);

  const navBar = () => {
    setMobile(!mobile);
  };
  return (
    <header className="sticky flex py-3 top-0 backdrop-blur-lg border-b border-neutral-700/80">
      <nav className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-7 w-7 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight capitalize">dubagari</span>
          </div>
          <ul className="hidden lg:flex ml-12 space-x-4">
            {navItems.map((items, index) => (
              <li key={index}>
                <a
                  className="hover:text-slate-400 hover:border-b"
                  href={items.href}
                >
                  {items.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-10 items-center">
            <a
              href="#"
              className="py-1 px-3 border rounded-md text-sm hover:text-slate-400 "
            >
              Sign In
            </a>
            <a
              href="#"
              className="hover:bg-gradient-to-r from-orange-500 to-orange-800 rounded-md py-1 px-3 bg-orange-700 hover:text-slate-400"
            >
              create accout
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={navBar}>{mobile ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobile && (
          <div className="fixed right-0 mt-3 z-20 bg-neutral-800 flex flex-col py-5 lg:hidden w-full justify-center items-center">
            <ul>
              {navItems.map((items, index) => (
                <li key={index} className="py-3">
                  <a href={items.href}>{items.label}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex justify-center space-x-5 items-center">
              <a href="#" className="py-1 px-3 border rounded-md text-sm">
                Sign In
              </a>
              <a
                href="#"
                className="hover:bg-gradient-to-r  from-orange-500 to-orange-800 rounded-md py-1 px-3 bg-orange-700"
              >
                create accout
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
