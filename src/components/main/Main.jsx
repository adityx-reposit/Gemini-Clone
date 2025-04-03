import {React,useContext } from "react";
import { assets } from "../../assets/assets";
import './Main.css'
import { Context } from "../../context/context";

  
const Main=()=>{
    const {previousPromt,
        Onsent,
        setrecentPromt,
        showResult,
        recentpromt,
        loading,
        
        resultdata,
        setInput,
        input}=useContext(Context)
   
   
    return(
        <div className="main">
           <div className="nav">
              <p>Gemini</p>
              <img src={assets.user_icon} alt="" />
           </div>
           <div className="main-container">
            {
                !showResult
                ?
               <>
                
              
            
              <div className="greet">
                <p><span>Hello , Aditya</span></p>
                <p>How can i help you today</p>
              </div>
              <div className="cards">
                <div className="card">
                    <p>Suggest the board marking of the following places </p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize the concept: urban planning </p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readablity of the development code </p>
                    <img src={assets.code_icon} alt="" />
                </div>
              </div>
              </>
              :<div className="result">
                     <div className="result-title">
                        <img  src={assets.user_icon} alt="" />
                         <p>{recentpromt}</p>
                     </div>
                     <div className="resultdata">
                        <img  src={assets.gemini_icon} alt="" />
                        {loading?
                        <div className="loader">
                           <hr />
                           <hr />
                           <hr />
                        </div>
                         :                   
                        <p dangerouslySetInnerHTML={{__html: resultdata }}></p>
                         }
                     </div>
                </div>
}
              <div className="main-bottom">
                  <div className="searchbox">
                    <input onChange={(e)=>setInput(e.target.value)} 
                    value={input} 
                     type="text"
                      placeholder="Enter promt here" />
                     
                     <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>Onsent()} src={assets.send_icon} alt="" />
                     </div>

                  </div>
                  <p className="bottom-info">This may so you the inaccurate info regarding cureent based senarios so double check it</p>
              </div>
           </div>
        </div>
    )

}
export default Main