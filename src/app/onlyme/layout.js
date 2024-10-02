"use client";
import Image from "next/image";
import { Iput, Tarea, CheckB, Ifile } from "../components/Inputs";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";

import {
  HiOutlineMail,
  HiOutlineMenu,
  HiOutlineMenuAlt3,
} from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

import { useEffect, useRef, useMemo, useState } from "react";
import Link from "next/link";
import { BiCopyright } from "react-icons/bi";

export default function Layout({ children, projects }) {
  const [cect, setCect] = useState("messages");
  const [drop, setDrop] = useState(false);
  const [view, setView] = useState(1);

  const pathname = usePathname();
  const projtype = [
    { name: "Soft Dev" },
    { name: "ML & AI" },
    { name: "Telecom" },
  ];

  const destinination = [
    { id: "messages", href: "" },
    { id: "projects", href: "/projects" },
  ];

  const software = [
    {
      title: "VRA Internship Portal & Management System",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "Farmecy Technologies Bulk SMS Application",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "Urban Air Pollution Challenge",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "Urban Air Pollution Challenge",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
  ];

  const mlai = [
    {
      title: "VRA Internship Portal & Management System",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "VRA Internship Portal & Management System",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "VRA Internship Portal & Management System",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "VRA Internship Portal & Management System",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },

    {
      title: "Urban Air Pollution Challenge hhhhfhhhvhhf hhhhhh hhhhhhhhhhhh",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
    {
      title: "Urban Air Pollution Challenge",
      description: "",
      imagea: "",
      imageb: "",
      link: "",
    },
  ];

  const telecom = [];

  useEffect(() => {
    if (navigator.userAgent.indexOf("iPhone") > -1) {
      document
        .querySelector("[name=viewport]")
        .setAttribute(
          "content",
          "width=device-width,initial-scale=1,maximum-scale=1"
        );
    }
  });

  const handleNavClick = (thisSection) => {
    setCect(thisSection);
  };

  const dropclick = () => {
    if (!drop) {
      document.addEventListener("click", clickListener);
    }
  };
  const clickListener = (e) => {
    const eventId = e.target.id;
    console.log(eventId);
    if (!eventId.includes("dropped")) {
      setDrop(false);
      return document.removeEventListener("click", clickListener);
    }
  };

  const d = new Date();
  let year = d.getFullYear();
  return (
    <main className="relative min-w-[368px] lg:items-center justify-between h-fit min-h-screen flex  lg:min-w-[100dvh] flex-col  items-start px-8 ">
      <header className="w-screen min-w-full fixed top-0 left-0 px-8 bg-[var(--main)] z-10  justify-center flex ">
        <nav className=" max-w-[1024px] w-full flex flex-row justify-between sticky h-[4rem]  top-0">
          {" "}
          <div className="flex flex-row w-[5rem] h-full justify-between  items-center ">
            {/* <Image
            width={40}
            height={40}
            src="/RizzApple.jpeg"
            className="w-[40px] h-[40px] rounded-full"
            alt="profile pic"
          ></Image> */}
            <div className="bg-[var(--high)] flex items-center justify-center  font-extrabold text-xl text-[var(--main)] w-[2.7rem] h-[2.7rem] rounded-full ">
              T
            </div>
            <h2 className=" font-bold ">ted</h2>
          </div>
          <div
            className="flex  items-center justify-between h-full"
            onClick={() => {
              setDrop(!drop);
              dropclick();
            }}
          >
            <ul className="remove flex flex-col  md:flex-row  gap-8 items-center  font-medium">
              {destinination.map((item, index) => {
                return (
                  <li
                    key={index}
                    id={`${
                      pathname.valueOf() === `/onlyme${item.href}`
                        ? "highlight"
                        : ""
                    }`}
                    className="normalNav uppercase cursor-pointer"
                    onClick={() => {
                      handleNavClick(item.id);
                    }}
                  >
                    <Link href={`/onlyme${item.href}`}> {item.id}</Link>
                  </li>
                );
              })}
            </ul>
            {!drop && (
              <>
                <ul className="remove_ flex flex-col  md:flex-row  gap-8 items-center  font-medium">
                  {destinination.map((item, index) => {
                    return (
                      <li
                        key={index}
                        id={`${
                          pathname.valueOf() === `/onlyme${item.href}`
                            ? "highlight"
                            : ""
                        }`}
                        className="normalNav uppercase cursor-pointer"
                      >
                        {item.id}{" "}
                      </li>
                    );
                  })}
                </ul>
                {(cect === "" && (
                  <HiOutlineMenu size="24px" className="remove_" />
                )) || <HiOutlineMenuAlt3 size="24px" className="remove_" />}
              </>
            )}
          </div>
        </nav>
        <ul
          id={`${drop ? "dropped" : "notdrop"}`}
          className="hider z-[20] drop-shadow-[0_2px_2px_#08080b80] overflow-hidden py-1 pl-[1rem] pr-[3rem] bg-[var(--main)] absolute top-[102%] right-2 flex-col gap-6 items-start rounded  font-medium"
        >
          {destinination.map((item, index) => {
            return (
              <li
                key={index}
                id={`${
                  pathname.valueOf() === `/onlyme${item.href}`
                    ? "highlight2"
                    : ""
                }`}
                className="uppercase cursor-pointer"
                onClick={() => {
                  handleNavClick(item.id);
                }}
              >
                {" "}
                <Link href={`/onlyme${item.href}`}> {item.id}</Link>
              </li>
            );
          })}
        </ul>
      </header>

      {children}
      {projects}

    
      <footer
        className="flex justify-center w-full max-w-[1024px]  items-center py-7 h-fit border-t border-[var(--high)] mt-6 justify-self-stretch
      "
      >
        <HiOutlineMail size={15} />
        theodelvis@gmail.com{" "}
        <BiCopyright style={{ paddingLeft: "8px" }} size={23} />
        {year} tedworks
      </footer>
    </main>
  );
}
