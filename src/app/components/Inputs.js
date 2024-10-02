"use client";
import "./inputs.css";
import { FaCheck } from "react-icons/fa6";

import { useState, useRef } from "react";

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

export const Ifile = (props) => {
  const { required, placeholder } = props;

  const [filing, setFiling] = useState(false);
  const filename = useRef(null);

  const handleFileName = (e) => {
    if (e.currentTarget.files.length > 0) {
      filename.current = e.currentTarget.files[0].name;
    } else {
      filename.current = null;
    }
  };
  const dothis = () => {
    return new Promise((resolve) => {
      setFiling(true);

      document.getElementById("file").addEventListener("change", (e) => {
        handleFileName(e);
      });

      resolve();
    });
  };
  return (
    <div
      className="letterdiv"
      onClick={() => {
        dothis().then(() => {
          setTimeout(() => {
            setFiling(false);
          }, 2000);
        });
      }}
    >
      <label className="px-[5px]" htmlFor="file">
        {filename.current === null ? `${placeholder}` : `${filename.current}`}
      </label>
      <Iput
        className="hidden"
        type="file"
        id="file"
        name="letter"
        required={required}
        accept=".jpeg"
      ></Iput>
    </div>
  );
};

export const CheckB = (props) => {
  const { label, value, checked } = props;

  return (
    <div>
      <input
        type="checkbox"
        className="w-0"
        defaultChecked={checked}
        id={label.toLowerCase()}
      ></input>
      <label htmlFor={label.toLowerCase()} className="flex gap-2">
        <div className="flex h-[25px] w-[25px] border items-center justify-center">
          <span>
            {" "}
            <FaCheck className="facheck" />
          </span>
        </div>
        Display
      </label>
    </div>
  );
};
