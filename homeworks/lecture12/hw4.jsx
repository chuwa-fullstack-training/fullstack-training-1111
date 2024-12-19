import { useEffect, useRef, useState } from "react";

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default function Converter() {
  const [originalData, setOriginalData] = useState("");
  const [convertedData, setConvertedData] = useState("");
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const convertInput = (inputStr) => {
    // if decimal, get the integar part
    if (inputStr.includes(".")) {
      const [integarPart, decimalPart] = inputStr.split(".");
      inputStr = integarPart;
    }
    // replace的办法更常见
    inputStr = inputStr.replace(/^0+/, "");

    if (inputStr) {
      const inputNum = Number(inputStr);
      if (isNaN(inputNum)) {
        setConvertedData(inputStr);
      } else {
        // edge case
        if (inputStr === "11" || inputStr === "12" || inputStr === "13") {
          setConvertedData(inputStr + "th");
          return;
        }
        const lastDigit = inputStr[inputStr.length - 1];
        switch (lastDigit) {
          case "1":
            setConvertedData(inputStr + "st");
            break;
          case "2":
            setConvertedData(inputStr + "nd");
            break;
          case "3":
            setConvertedData(inputStr + "rd");
            break;
          default:
            setConvertedData(inputStr + "th");
            break;
        }
      }
    } else {
      setConvertedData("");
    }
  };

  const debouncedConvert = debounce((value) => convertInput(value), 500);

  const handleInput = (e) => {
    let inputStr = e.target.value;
    setOriginalData(inputStr);
    debouncedConvert(inputStr);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollLeft = outputRef.current.scrollWidth;
    }
  }, [convertedData]);

  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ width: "100px", fontSize: "14px" }}
        type="text"
        value={originalData}
        onChange={handleInput}
        placeholder="Provide Your Input"
        ref={inputRef}
      />

      <div
        style={{
          boxSizing: "border-box",
          border: "1px solid black",
          width: "100px",
          fontSize: "14px",

          overflow: "auto",
          whiteSpace: "nowrap",
          // 隐藏滚动条
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        ref={outputRef}
      >
        {convertedData}
      </div>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
        `}
      </style>
    </div>
  );
}
