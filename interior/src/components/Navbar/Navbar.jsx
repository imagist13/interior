import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const NavLinks = [
  {
    id: 1,
    title: "百度飞桨",
    link: "#",
  },
  {
    id: 2,
    title: "主页",
    link: "#",
  },
  {
    id: 3,
    title: "产品",
    link: "#",
  },
  {
    id: 4,
    title: "联系我们",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-10" />
          <span className="text-2xl font-bold">Interior</span>
        </div>
        {/* Link section */}
        <div className="hidden md:block !space-x-12">
          {NavLinks.map((link) => {
            return (
              <a
                href={link.link}
                className="inline-block mx-4 text-lg font-semibold"
              >
                {link.title}
              </a>
            );
          })}
        </div>
        {/* Button section */}
        <div>
          <button className="primary-btn">开源使用</button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
