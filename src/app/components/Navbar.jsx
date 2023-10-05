"use client";
import Link from "next/link";
import React, { useState } from "react";
import { NavLink } from "./NavLink";
import { BsGridFill, BsGrid } from "react-icons/bs";
import { MenuOverlay } from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "/",
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
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            className=" invert-[75%]"
            width={100}
            height={100}
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
    </nav>
  );
};