"use client";
import { useState } from "react";

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
