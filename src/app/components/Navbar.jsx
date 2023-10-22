"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { BsGridFill, BsGrid } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { MenuOverlay } from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#1a1a1aa4] bg-opacity-95 ">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold my-[-40px] "
        >
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={150}
            height={150}
            priority={true}
          />
        </Link>
        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center px-3 py-2 border-2 rounded border-slate-200 border-opacity-10 text-purple-500 hover:text-white hover:border-purple-500"
            >
              <BsGrid className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex items-center px-3 py-2 border rounded border-slate-200 border-opacity-10 text-purple-500 hover:text-white hover:border-purple-500"
            >
              <BsGridFill className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      <section className="flex justify-around py-2 border border-slate-700 lg:border-none md:border-none">
        <Link href="https://github.com/EstebanGaMi" target="_blank">
          <AiOutlineGithub className=" text-2xl text-white lg:hidden md:hidden  hover:text-purple-500" />
        </Link>
        <Link href="https://www.instagram.com/_estebang23_/" target="_blank">
          <AiOutlineInstagram className="text-2xl text-white lg:hidden md:hidden  hover:text-purple-500" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/esteban-garay-4baa94202/"
          target="_blank"
        >
          <AiOutlineLinkedin className="text-2xl text-white lg:hidden md:hidden hover:text-purple-500" />
        </Link>
      </section>
    </nav>
  );
};
