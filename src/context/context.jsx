import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentpromt, setrecentPromt] = useState("");
  const [previousPromt, setpreviousPromt] = useState([]);
  const [showResult, setResultshow] = useState(false);
  const [loading, Setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");
  const delaypara = (index, nextword) => {
    setTimeout((e) => {
      setresultdata((prev) => prev + nextword);
    }, 75 * index);
  };
  const Onsent = async (promt) => {
    setresultdata(""); // Set to an empty string
    Setloading(true);
    setResultshow(true);
    let response;
    if (promt !== undefined) {
      response = await run(promt);
      setrecentPromt(promt);
    } else {
      setpreviousPromt((prev) => [...prev, input]);
      setrecentPromt(input);
      response = await run(input);
    }

    let responseArray = response.split("**");
    let newArray;
    for (let i = 0; i < responseArray.length; i++) {
      if (i == 0 || i % 2 !== 1) {
        newArray += responseArray[i];
      } else {
        newArray += "<b>" + responseArray + "</b>";
      }
    }
    let newresponse2 = newArray.split("*"||",").join("</br>");
    let newresponsearray = newresponse2.split(" ");
    for (let i = 0; i < newresponsearray.length; i++) {
      const nextword = newresponsearray[i];
      delaypara(i, nextword + " ");
    }
    Setloading(false);
    setInput("");
  };
  const ContextValue = {
    previousPromt,
    setpreviousPromt,
    Onsent,
    setrecentPromt,
    showResult,
    recentpromt,
    loading,
    resultdata,
    setInput,
    input,
  };
  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
