"use client";
import Image from "next/image";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCss3,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNodeJs,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
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
  const [cect, setCect] = useState();
  const [view, setView] = useState(1);
  const [softpos, setSoftPos] = useState(0);
  const [mlaipos, setMlaiPos] = useState(0);
  const [telpos, setTelPos] = useState(0);
  const [arrpos, setArrPos] = useState(false);

  const projtype = [
    { name: "Soft Dev" },
    { name: "ML & AI" },
    { name: "Telecom" },
  ];

  const destinination = [
    { id: "bio" },
    { id: "projects" },
    { id: "skills" },
    { id: "contacts" },
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

  const telecom = [];

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
      setCect("contacts");
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

  return (
    <main className="relative lg:items-center flex h-screen max-w-screen flex-col  items-start px-8 ">
      <nav className="max-w-[1024px] w-full bg-[rgb(var(--main))] z-10 flex flex-row justify-between sticky h-[4rem]  top-0">
        {" "}
        <div className="flex flex-row w-[80px] h-full justify-between  items-center ">
          {/* <Image
            width={40}
            height={40}
            src="/RizzApple.jpeg"
            className="w-[40px] h-[40px] rounded-full"
            alt="profile pic"
          ></Image> */}
          <div className="bg-[rgb(var(--sec))] flex items-center justify-center font-extrabold text-xl text-[rgb(var(--main))] w-[40px] h-[40px] rounded-full ">
            T
          </div>
          <h3 className=" font-bold ">ted</h3>
        </div>
        <ul className="hidden flex-col md:flex md:flex-row  gap-8 items-center  font-medium">
          {destinination.map((item, index) => {
            return (
              <li
                key={index}
                id={`${cect === item.id ? "highlight" : ""}`}
                className="normalNav uppercase"
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
      </nav>

      <div
        className="flex flex-col w-fit h-[calc(100dvh-4rem)] overflow-y-scroll snap-mandatory snap-y"
        id="scrollBox"
        onScroll={(e) => {
          navReaction(e);
        }}
      >
        {/* HOME /////////////////////////////////////////////////////////////////*/}

        <section id="home" className="relative flex gap-[2rem] ">
          <div className="h-fit flex flex-col w-[90%] sm:w-[45%] ">
            <h3>WELCOME TO MY PAGE</h3>
            <h1 className="font-bold leading-snug">Hi, Yeah That's It.</h1>
            <div className="h-fit  ">
              <h3>
                {" "}
                <Lorem></Lorem>
              </h3>
            </div>
            <div className="flex pt-12 justify-start ">
              <div className="flex sm:flex-row flex-col w-fit pr-[30%] sm:gap-4 gap-8 justify-center justify-self-start">
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

          <div className=" hidden sm:block bg-red h-full w-[40%] bottom-[10%]  right-[10%] sm:bottom-[20%] sm:right-[10%]">
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
              <div className="w-[90%] bg-slate-400 h-[95%] rounded-xl absolute top-[20%] -z-10"></div>
              <div className="w-[90%] bg-slate-300 h-[95%] rounded-xl absolute top-[5%] left-[10%]"></div>
            </div>
            <div className="  flex w-[50%] text-wrap justify-center items-end">
              {" "}
              <h1 className="w-[100%] font-bold leading-snug">
                This is all you need to know about me.
              </h1>
            </div>
          </div>
          <div className="w-[80%] md:pl-[50%] md:pt-[0px] pt-[54px]">
            <h3 className="">
              {" "}
              <Lorem></Lorem>
            </h3>
          </div>
        </section>

        {/* PROECTS /////////////////////////////////////////////////////////////////*/}

        <section id="projects" className="relative ">
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
                  className="cursor-pointer border-b-0 border-x-0 border-[2px] border-[rgb(var(--main))] py-1 px-4 "
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
                  className="relative  w-[80vw] max-w-full flex overflow-scroll snap-mandatory snap-x  scrollbar-hide"
                >
                  {software.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col w-full pt-8 md:gap-8 snap-start pr-2"
                      >
                        {" "}
                        <h3 className="font-bold uppercase">{item.title}</h3>
                        <div className="w-full h-fit flex flex-wrap gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[250px] sm:w-[350px] aspect-[2/1] rounded-lg"></div>
                        </div>
                        <div>
                          <h3 className="font-bold">Description:</h3>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                        <div>
                          <h3 className="font-bold ">Link:</h3>
                          <h3>{item.link}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-2 flex gap-3 md:pt-9 w-full h-32 justify-center items-center">
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
                        className="border-[rgb(var(--sec))] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
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
            <h3 className="font-bold uppercase pt-8">
              Nothing to see here yet, will be updated soon
            </h3>
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
                        className="flex flex-col w-full pt-8 md:gap-8 snap-start pr-2"
                      >
                        {" "}
                        <h3 className="font-bold uppercase">{item.title}</h3>
                        <div className="w-full h-fit flex flex-wrap gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[250px] sm:w-[350px] aspect-[2/1] rounded-lg"></div>
                        </div>
                        <div>
                          <h3 className="font-bold">Description:</h3>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                        <div>
                          <h3 className="font-bold ">Link:</h3>
                          <h3>{item.link}</h3>
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
                        className="border-[rgb(var(--sec))] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
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
            <h3 className="font-bold uppercase pt-8">
              Nothing to see here yet, will be updated soon
            </h3>
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
                        className="flex flex-col w-full pt-8 md:gap-8 snap-start pr-2"
                      >
                        {" "}
                        <h3 className="font-bold uppercase">{item.title}</h3>
                        <div className="w-full h-fit flex flex-wrap gap-4 justify-start">
                          <div className="bg-slate-400 max-w-full w-[250px] sm:w-[350px] aspect-[2/1] rounded-lg"></div>
                        </div>
                        <div>
                          <h3 className="font-bold">Description:</h3>
                          <h3>
                            <Lorem></Lorem>
                          </h3>
                        </div>
                        <div>
                          <h3 className="font-bold">Link:</h3>
                          <h3>{item.link}</h3>
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
                        className="border-[rgb(var(--sec))] border h-[1rem] w-[1rem] cursor-pointer rounded-sm"
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
              className=" flex w-[calc(100vw-128px)] overflow-hidden ml-16"
            >
              <div id="logodiv" className="flex">
                <BiLogoFigma />
                <BiLogoHtml5 />
                <BiLogoCss3 />
                <BiLogoJavascript />
                <BiLogoPython />
                <BiLogoTypescript />
                <BiLogoReact />
                <BiLogoTailwindCss />
                <BiLogoNodejs />
                <BiLogoMongodb />
                <BiLogoGit />
              </div>
              <div id="logodiv" className="flex">
                <BiLogoFigma />
                <BiLogoHtml5 />
                <BiLogoCss3 />
                <BiLogoJavascript />
                <BiLogoPython />
                <BiLogoTypescript />
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

        <section id="contact" className="h-[50%] ] max-h-[512px] snap-end">
          <div className="flex flex-col gap-4">
            {" "}
            <label className="font-bold uppercase">
              Leave me Feedback below
            </label>
            <textarea rows="8"></textarea>
            <button>Submit Response</button>
          </div>
        </section>
      </div>
    </main>
  );
}

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
