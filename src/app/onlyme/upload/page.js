"use client";
import { Ifile, Iput } from "@/app/components/Inputs";
import { Tarea } from "@/app/components/Inputs";
import { useState } from "react";
const page = () => {
  const [view, setView] = useState(1);
  const [drop, setDrop] = useState(false);

  const projtype = [
    { name: "Software" },
    { name: "Learning" },
    { name: "Telecom" },
  ];
  return (
    <>
      <section className="h-fit  ">
        <div className="font-bold uppercase pb-4">New Project</div>
        <div className="flex flex-col gap-6 ">
          <div
            className="relative"
            id="selector"
            onClick={() => setDrop(!drop)}
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
          </div>{" "}
          <Iput placeholder="Title" maxLength="50"></Iput>
          <Iput placeholder="Link" maxLength="400"></Iput>
          <Tarea placeholder="Description" maxLength="350" rows="8"></Tarea>
          <Ifile placeholder="Upload Image 1" type="file"></Ifile>
          {view == "1" && (
            <Ifile placeholder="Upload Image 2" type="file"></Ifile>
          )}
          <button className="self-end">UPLOAD PROJECT</button>
        </div>
      </section>
    </>
  );
};

export default page;
