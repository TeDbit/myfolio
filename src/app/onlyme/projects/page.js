"use client";
import { CheckB, Ifile, Iput } from "@/app/components/Inputs";
import { Tarea } from "@/app/components/Inputs";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
const Page = () => {
  const [view, setView] = useState(1);
  const [drop, setDrop] = useState(false);
  const [open, setOpen] = useState(false);
  const [tags, seTags] = useState(["one","two"]);
  const projtype = [
    { name: "Software" },
    { name: "Learning" },
    { name: "Telecom" },
  ];

  const single = {
    id: 1,
    title: "VRA Internship Portal & Managment System",
    link: "someplace.com",
    display: true,
    stamp: "2nd June 2024",
    desctiption: "That.s the shit",
    imgA: "classic.jped",
    imgB: "slassic.jped",
    tags: ["nextjs", "react", "html", "firebase"],
  };

  const projdata = {
    software: [
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
    ],
    learning: [
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
    ],
    telecom: [
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
      {
        id: 1,
        title: "VRA Internship Portal & Managment System",
        stamp: "2nd June 2024",
      },
    ],
  };
  return (
    <>
      {" "}
      <section
        className="h-fit flex
      flex-col  "
      >
        <ul
          className="flex sm:justify-start justify-center flex-row gap-[1.5rem] max-w-full"
          id="listy"
        >
          {projtype.map((item, index) => {
            return (
              <li
                key={index}
                id={`${view === index + 1 ? "selected" : ""}`}
                onClick={() => {
                  setView(index + 1);
                }}
                className="cursor-pointer border-b-0 border-x-0 border-[2px] border-[var(--main)]"
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <button className="self-end my-3" onClick={() => setOpen(true)}>
          New Project
        </button>
        {view == 1 && 1}
        <div className="flex flex-col w-full">
          {projdata.software.map((item, index) => {
            return (
              <div
                className="row"
                key={index}
                //   onClick={() => {
                //     handleLeftClick();
                //   }}
                //   onDoubleClick={() => {
                //     handleDoubleClick();
                //   }}
                //   onContextMenu={(e) => {
                //     e.preventDefault();
                //     handleRightClick();
                //   }}
                //   ref={array.length === index + 1 ? reff : null}
              >
                <div className="item">{item.title}</div>
                <div className="item self-end">{item.stamp} </div>
              </div>
            );
          })}
        </div>
      </section>
      <dialog
        className=" fixed z-5 top-[90px] rounded-[8px]  h-fit drop-shadow-[0_2px_2px_#08080b80] w-[24rem] px-6 py-4 text-[var(--sec)] bg-[var(--main)]"
        open={open}
      >
        <HiOutlineXMark
          size={24}
          className=" absolute  right-6 top-4"
          onClick={() => setOpen(false)}
        />
        <div className="flex gap-2">
          <div className="font-bold uppercase pb-4">New Project </div>
          <div
            className="relative border rounded h-fit pr-1"
            onClick={() => setDrop(!drop)}
            id="selector"
          >
            <label className="px-[5px]">{projtype[view - 1].name}</label>
            <ul
              id={`${drop ? "dropped" : "notdrop"}`}
              className="selectorDD z-[20] drop-shadow-[0_2px_2px_#08080b80] overflow-hidden py-1 pl-[4px] pr-[3rem] bg-[var(--main)] absolute top-[0%]  flex-col gap-6 items-start rounded  font-medium"
            >
              {projtype.map((item, index) => {
                return (
                  <span
                    key={index}
                    id={`${view === index + 1 ? "highlight2" : ""}`}
                    onClick={() => {
                      setView(index + 1);
                    }}
                    className="cursor-pointer border-b-0 border-x-0 border-[2px] border-[var(--main)]"
                  >
                    {item.name}
                  </span>
                );
              })}
            </ul>
            <FaAngleDown className="inline" />
          </div>{" "}
        </div>
        <div className="flex flex-col gap-6 ">
          <Iput placeholder="Title" maxLength="50"></Iput>
          <Iput placeholder="Link" maxLength="400"></Iput>
          <Tarea placeholder="Description" maxLength="350" rows="8"></Tarea>
          <Ifile placeholder="Upload Image 1" type="file"></Ifile>
          {view == "1" && (
            <Ifile placeholder="Upload Image 2" type="file"></Ifile>
          )}
          <CheckB label={"display"} value={true} checked={true}></CheckB>
          <div className="flex gap-3  w-[90%]">
            <Iput placeholder="Add Tag"></Iput>
            <span className="p-[4px]  border rounded cursor-pointer">+</span>
          </div>
          <div className="flex flex-wrap  gap-3 w-full">
            {tags.map((item, index) => {
              return (
                <span
                  key={index}
                  className="flex p-[4px] gap-2 items-center  border rounded cursor-pointer"
                >
                  <HiOutlineXMark size={18}></HiOutlineXMark>
                  {item}
                </span>
              );
            })}
          </div>

          <button className="self-end">UPLOAD PROJECT</button>
        </div>{" "}
      </dialog>
    </>
  );
};

export default Page;
