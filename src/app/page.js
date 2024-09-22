"use client";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaLinkedin,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import {
  BiLogoFigma,
  BiLogoGit,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  HiOutlineMenu,
  HiOutlineMenuAlt3,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";

import { useEffect, useRef, useMemo, useState } from "react";

const Lorem = (n) => {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </>
  );
};

export default function Home() {
  const [cect, setCect] = useState("");
  const [view, setView] = useState(1);
  const [softpos, setSoftPos] = useState(0);
  const [mlaipos, setMlaiPos] = useState(0);
  const [telpos, setTelPos] = useState(0);
  const [arrpos, setArrPos] = useState(false);
  const [drop, setDrop] = useState(false);

  const projtype = [
    { name: "Soft Dev" },
    { name: "ML & AI" },
    { name: "Telecom" },
  ];

  const destinination = [
    { id: "bio" },
    { id: "projects" },
    { id: "skills" },
    { id: "contact" },
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

  const navReaction = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const ratio = scrollTop / (scrollHeight - clientHeight);
    if (ratio < 0.25) {
      setCect("");
    } else if (0.5 > ratio > 0.25) {
      setCect("bio");
    } else if (0.65 > ratio > 0.4) {
      setCect("projects");
    } else if (0.9 > ratio > 0.65) {
      setCect("skills");
    } else if (ratio > 0.9) {
      setCect("contact");
    }
  };

  const projScroll = (e, setter, len) => {
    const { scrollLeft, scrollWidth } = e.target;
    setter(scrollLeft / scrollWidth);
    const currentpos = scrollLeft / scrollWidth;
    const ratio = scrollWidth / (len * scrollWidth);
    const lastpos = 1 - ratio;

    if (currentpos < ratio) {
      setArrPos(false);
    }
    if (currentpos + ratio > lastpos) {
      setArrPos(true);
    }
  };

  const selectDot = (x, y, z) => {
    if (x / y - 1 / (2 * y) < z && z < x / y + 1 / (2 * y)) {
      return true;
    } else {
      return false;
    }
  };

  const handleNavClick = (thisSection) => {
    const scrollCont = document.getElementById("scrollBox");
    const section = document.getElementById(thisSection);
    const position = section.offsetTop;
    scrollCont.scrollTo(0, position);
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

  const handleDotClick = (idd, index, len) => {
    const scrollCont = document.getElementById(idd);
    const position = (scrollCont.scrollWidth * index) / len;
    scrollCont.scrollTo(position, 0);
  };

  const handleRightClick = (idd, len) => {
    const scrollCont = document.getElementById(idd);
    const currentpos = scrollCont.scrollLeft / scrollCont.scrollWidth;
    const ratio = scrollCont.scrollWidth / (len * scrollCont.scrollWidth);
    const lastpos = 1 - ratio;
    if (currentpos < lastpos) {
      scrollCont.scrollTo((currentpos + ratio) * scrollCont.scrollWidth, 0);
    }
    if (currentpos + 2 * ratio > lastpos) {
      setArrPos(true);
    }
  };

  const handleLeftClick = (idd, len) => {
    const scrollCont = document.getElementById(idd);
    const currentpos = scrollCont.scrollLeft / scrollCont.scrollWidth;
    const ratio = scrollCont.scrollWidth / (len * scrollCont.scrollWidth);
    if (currentpos > 0) {
      scrollCont.scrollTo((currentpos - ratio) * scrollCont.scrollWidth, 0);
    }
    if (currentpos - ratio < ratio) {
      setArrPos(false);
    }
  };

  const d = new Date();
  let year = d.getFullYear();
  return (
    <main className="relative lg:items-center flex  lg:min-w-[100dvh] flex-col  items-start px-8 ">
      <header className="w-screen absolute top-0 right-0 px-8 justify-center flex ">
        <nav className=" max-w-[1024px] w-full bg-[var(--main)] z-10 flex flex-row justify-between sticky h-[4rem]  top-0">
          {" "}
          <div className="flex flex-row w-[5rem] h-full justify-between  items-center ">
            {/* <Image
            width={40}
            height={40}
            src="/RizzApple.jpeg"
            className="w-[40px] h-[40px] rounded-full"
            alt="profile pic"
          ></Image> */}
            <div className="bg-[var(--high)] flex items-center justify-center font-extrabold text-xl text-[var(--main)] w-[2.7rem] h-[2.7rem] rounded-full ">
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
                    id={`${cect === item.id ? "highlight" : ""}`}
                    className="normalNav uppercase cursor-pointer"
                    onClick={() => {
                      handleNavClick(item.id);
                    }}
                  >
                    {" "}
                    {item.id}
                  </li>
                );
              })}
            </ul>
            {!drop && (
              <>
                <ul className=" remove_ flex flex-col  md:flex-row  gap-8 items-center  font-medium">
                  {destinination.map((item, index) => {
                    return (
                      <li
                        key={index}
                        id={`${cect === item.id ? "highlight" : ""}`}
                        className="normalNav uppercase cursor-pointer"
                      >
                        {" "}
                        {item.id}
                      </li>
                    );
                  })}
                </ul>
                {(cect === "" && (
                  <HiOutlineMenu size="24px" className="remove_" />
                )) || <HiOutlineMenuAlt3 size="24px" className="remove_" />}
              </>
            )}
            {drop && <HiOutlineXMark size="24px" className="remove_" />}
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
                id={`${cect === item.id ? "highlight2" : ""}`}
                className="uppercase cursor-pointer"
                onClick={() => {
                  handleNavClick(item.id);
                }}
              >
                {" "}
                {item.id}
              </li>
            );
          })}
        </ul>
      </header>

      <div
        className="flex flex-col w-fit h-[calc(100dvh)] overflow-y-scroll snap-mandatory snap-y"
        id="scrollBox"
        onScroll={(e) => {
          navReaction(e);
        }}
      >
        {/* HOME /////////////////////////////////////////////////////////////////*/}

        <section
          id="home"
          className="relative flex  items-center justify-between  pt-[4rem]"
        >
          <div className="h-fit flex flex-col w-[90%] sm:w-[45%] ">
            <h2>WELCOME TO MY PAGE</h2>
            <h1 className="font-bold leading-snug">Hi, Yeah That's It.</h1>
            <div className="h-fit  ">
              <h3>
                {" "}
                <Lorem></Lorem>
              </h3>
            </div>
            <div className="flex pt-12 justify-start ">
              <div className="text-[var(--high)] flex sm:flex-row flex-col w-fit pr-[30%] sm:gap-4 gap-8 justify-center justify-self-start">
                <FaSquareXTwitter size={"3.5rem"} />
                <FaSquareGithub size={"3.5rem"} />
                <FaLinkedin size={"3.5rem"} />
              </div>

              <div className=" block sm:hidden h-full w-[40%] bottom-[10%]  right-[10%] sm:bottom-[20%] sm:right-[10%]">
                {" "}
                <Image
                  height={"100"}
                  width={"150"}
                  src="/RizzOpt.png"
                  className="  drop-shadow-[60px_2px_5px_rgb(0,0,0,0.6)] "
                  alt="profile pic"
                ></Image>
              </div>
            </div>
          </div>

          <div className=" hidden sm:block h-fit w-[40%] ">
            {" "}
            <Image
              height={"100"}
              width={"250"}
              src="/RizzOpt.png"
              className="  drop-shadow-[60px_2px_5px_rgb(0,0,0,0.6)] "
              alt="profile pic"
            ></Image>
          </div>
        </section>

        {/* BIO /////////////////////////////////////////////////////////////////*/}

        <section id="bio" className=" justify-center">
          <div className=" flex  h-[50%]">
            <div className="h-ful w-[50%]  relative">
              <div className="w-[90%] bg-slate-400 h-[80%] sm:h-[95%]  rounded-xl absolute top-[16%] -z-10"></div>
              <div className="w-[90%] bg-slate-300 h-[80%] sm:h-[95%]  rounded-xl absolute top-[5%] left-[6%]"></div>
            </div>
            <div className="  flex w-[50%] text-wrap justify-center items-end">
              {" "}
              <h1 className="w-[100%] font-bold leading-snug">
                This is all you need to know about me.
              </h1>
            </div>
          </div>
          <div className="w-[80%] md:pl-[50%] pt-2 md:pt-[0px] sm:pt-14">
            <h3 className="">
              {" "}
              <Lorem></Lorem>
            </h3>
          </div>
        </section>

        {/* PROECTS /////////////////////////////////////////////////////////////////*/}

        <section id="projects" className="relative">
          {/* <h1 className="w-[100%] text-5xl font-bold leading-snug">
            What Have I Done ?
          </h1> */}
          <ul
            className="flex sm:justify-start justify-center flex-row gap-8 max-w-full"
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

          {/* SOFYWARE ///////////////////////////////////////*/}

          {(view === 1 && software.length === 0 && (
            <h3 className="font-bold uppercase pt-8">
              Nothing to see here yet, will be updated soon
            </h3>
          )) ||
            (view === 1 && (
              <>
                <div
                  id="softscroll"
                  onScroll={(e) => {
                    projScroll(e, setSoftPos, software.length);
                  }}
                  className="relative w-[80vw] max-w-full flex overflow-scroll snap-mandatory snap-x  scrollbar-hide"
                >
                  {software.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col w-full pt-10 gap-10 snap-start pr-2"
                      >
                        {" "}
                        <h2 className="font-bold uppercase">{item.title}</h2>
                        <div className="w-full h-fit flex gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[15rem] sm:w-[28rem] aspect-[1.8/1] rounded-lg"></div>
                          <div className="bg-slate-300 h-full aspect-[1/2] rounded-lg"></div>
                        </div>
                        <div>
                          <h2 className="font-bold">Description:</h2>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-[var(--high)] absolute bottom-2 flex gap-3 md:pt-9 w-full h-32 justify-center items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleLeftClick("softscroll", software.length);
                    }}
                  >
                    <FaArrowLeftLong size={"1.4rem"} />
                  </div>
                  {software.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          handleDotClick("softscroll", index, software.length)
                        }
                        id={
                          selectDot(index, software.length, softpos)
                            ? "light"
                            : ""
                        }
                        className="border-[var(--sec)] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
                      ></div>
                    );
                  })}
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleRightClick("softscroll", software.length);
                    }}
                  >
                    <FaArrowRightLong size={"1.4rem"} />
                  </div>
                </div>
              </>
            ))}

          {/* MLAI ///////////////////////////////////////*/}

          {(view === 2 && mlai.length === 0 && (
            <h2 className="font-bold uppercase pt-8">
              Nothing to see here yet, will be updated soon
            </h2>
          )) ||
            (view == 2 && (
              <>
                <div
                  id="mlaiscroll"
                  onScroll={(e) => {
                    projScroll(e, setMlaiPos, mlai.length);
                  }}
                  className="relative  w-[80vw] max-w-full flex overflow-scroll snap-mandatory snap-x  scrollbar-hide"
                >
                  {mlai.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col gap-10 w-full pt-10 snap-start pr-2"
                      >
                        {" "}
                        <h2 className="font-bold uppercase">{item.title}</h2>
                        <div className="w-full h-fit flex flex-wrap gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[16rem] sm:w-[30rem] aspect-[2/1] rounded-lg"></div>
                        </div>
                        <div>
                          <h2 className="font-bold">Description:</h2>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-2 flex gap-3 md:pt-9 w-full h-32 justify-center items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleLeftClick("mlaiscroll", mlai.length);
                    }}
                  >
                    <FaArrowLeftLong size={"1.4rem"} />
                  </div>
                  {mlai.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          handleDotClick("mlaiscroll", index, mlai.length)
                        }
                        id={
                          selectDot(index, mlai.length, mlaipos) ? "light" : ""
                        }
                        className="border-[var(--sec)] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
                      ></div>
                    );
                  })}
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleRightClick("mlaiscroll", mlai.length);
                    }}
                  >
                    <FaArrowRightLong size={"1.4rem"} />
                  </div>
                </div>
              </>
            ))}

          {/* TELECOM ///////////////////////////////////////*/}

          {(view === 3 && telecom.length === 0 && (
            <h2 className="font-bold uppercase pt-8">
              Nothing to see here yet, will be updated soon
            </h2>
          )) ||
            (view === 3 && (
              <>
                <div
                  id="telscroll"
                  onScroll={(e) => {
                    projScroll(e, setTelPos, telecom.length);
                  }}
                  className="relative  w-[80vw] max-w-full flex overflow-scroll snap-mandatory snap-x  scrollbar-hide"
                >
                  {telecom.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col w-full pt-10 gap-10 snap-start pr-2"
                      >
                        {" "}
                        <h2 className="font-bold uppercase">{item.title}</h2>
                        <div className="w-full h-fit flex flex-wrap gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[16rem] sm:w-[30rem] aspect-[2/1] rounded-lg"></div>
                        </div>
                        <div>
                          <h2 className="font-bold">Description:</h2>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute bottom-2 flex gap-3 md:pt-9 w-full h-32 justify-center items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleLeftClick("telscroll", telecom.length);
                    }}
                  >
                    <FaArrowLeftLong size={"1.4rem"} />
                  </div>
                  {telecom.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() =>
                          handleDotClick("telscroll", index, telecom.length)
                        }
                        id={
                          selectDot(index, telecom.length, telpos)
                            ? "light"
                            : ""
                        }
                        className="border-[var(--sec)] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
                      ></div>
                    );
                  })}
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      handleRightClick("telscroll", telecom.length);
                    }}
                  >
                    <FaArrowRightLong size={"1.4rem"} />
                  </div>
                </div>
              </>
            ))}
        </section>

        {/* SKILLS /////////////////////////////////////////////////////////////////*/}

        <section id="skills" className="flex flex-col gap-10 ">
          <div>
            <label className="font-bold uppercase">Soft Skills</label>

            <ul className="list-disc pl-16">
              <li>Critical Thinking & Problem Solving</li>
              <li>Leadership and Interpersonal Skills</li>
              <li>Ability to learn new disciplines quickly</li>
              <li>Fundamental understanding in programming</li>
            </ul>
          </div>
          <div>
            <label className="font-bold uppercase">Hard Skills</label>
            <ul className="list-disc pl-16">
              <li>Software Development</li>
              <li>Machine Learning & AI</li>
              <li>Computer Networking & Cisco Packet Tracer</li>
              <li>MATLAB</li>
              <li>LATEX</li>
            </ul>
          </div>
          <div className="overflow-hidden">
            <label className="font-bold uppercase">Tech Stack</label>

            <div
              id="scroll"
              className=" flex max-w-[472px] w-[calc(100vw-128px)] overflow-hidden ml-16"
            >
              <div id="logodiv" className="flex">
                <BiLogoFigma />
                <BiLogoJavascript />
                <BiLogoPython />
                <BiLogoReact />
                <BiLogoTailwindCss />
                <BiLogoNodejs />
                <BiLogoMongodb />
                <BiLogoGit />
              </div>
              <div id="logodiv" className="flex">
                <BiLogoFigma />
                <BiLogoJavascript />
                <BiLogoPython />
                <BiLogoReact />
                <BiLogoTailwindCss />
                <BiLogoNodejs />
                <BiLogoMongodb />
                <BiLogoGit />
              </div>
            </div>
          </div>
          <button className="">Download Full Resume</button>
        </section>

        {/* CONTACT /////////////////////////////////////////////////////////////////*/}

        <section id="contact" className="h-fit min-h-[312px] max-h-[512px] ">
          <div className="font-bold uppercase pb-4">
            Leave me Feedback below
          </div>
          <div className="flex flex-col gap-6 ">
            {" "}
            <Iput placeholder="Name" maxLength="50"></Iput>
            <Tarea placeholder="Message" maxLength="350" rows="8"></Tarea>
            <button className="self-end">Submit Response</button>
          </div>
          <footer className="flex justify-center items-center py-7 h-fit border-t border-[var(--high)] mt-6">
            <HiOutlineMail size={
              15
            }></HiOutlineMail>theodelvis@gmail.com @{year} tedworks
          </footer>
        </section>
      </div>
    </main>
  );
}

export const Iput = (props) => {
  const [err, setErr] = useState(false);
  const {
    type,
    placeholder,
    required,
    name,
    pattern,
    onChange,
    className,
    id,
    maxLength,
    title,
    errmsg,
    accept,
  } = props;

  return (
    <div className="group">
      <input
        type={type}
        required={required}
        name={name}
        placeholder=" "
        pattern={pattern}
        maxLength={maxLength}
        className={err ? `${className} err` : `${className}`}
        id={id}
        title={title}
        accept={accept}
        onChange={(e) => {
          if (pattern) {
            const regx = new RegExp(`${pattern}`);

            if (regx.test(e.target.value) || e.target.value === "") {
              setErr(false);
            } else {
              setErr(true);
            }
          }

          if (onChange) {
            onChange(e);
          } else {
            return;
          }
        }}
      ></input>
      {placeholder && <label className={err ? "err" : ""}>{placeholder}</label>}
      <div className="errormsg">{err && errmsg}</div>
    </div>
  );
};

export const Tarea = (props) => {
  const {
    type,
    placeholder,
    required,
    name,
    pattern,
    onChange,
    className,
    maxLength,
    id,
    rows,
    title,
  } = props;

  return (
    <div className="group">
      <textarea
        type={type}
        required={required}
        name={name}
        placeholder=" "
        pattern={pattern}
        className={className}
        id={id}
        rows={rows}
        maxLength={maxLength}
        title={title}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          } else {
            return;
          }
        }}
      ></textarea>
      {placeholder && <label>{placeholder}</label>}
    </div>
  );
};

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 tosnap-startp-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
