import React, { useContext, useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const sidebar=()=>{

   const [extended,setextender]=useState(false)
  const {onsent,previousPromt,setrecentPromt}=useContext(Context)
     const loadpromt=async(promt)=>{
      setrecentPromt(promt)
      await onsent(promt)
     }

    return(
        <div className='sidebar'>
           <div className='top'>
            <img onClick={()=>setextender(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
           <div className='new-chat'>
                 <img src={assets.plus_icon} alt="" />
                
                 {extended ? <p>New Chat</p>:null}
           </div>
           {extended?
             <div className="recent">
                <p className="recent-title"> recent </p>
                  {previousPromt.map((item,index)=>{
                        return(

                 <div onClick={()=>loadpromt(item)} className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                 </div>
                        )
                  })}
             </div>
           :null
}
           </div>
           <div className="bottom">
              <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
              </div>
              <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
              </div>
              <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Setting</p>:null}
              </div>

           </div>
        </div>
    )
}
export default sidebar