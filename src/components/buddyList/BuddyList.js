import { useState, useEffect } from "react";
import React from "react";
import {
  fetchCheckLikes,
  fetchSingleUser,
  fetchConfirmBuddy,
} from "../../utils/fetchReq";
import "./buddyList.css";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
// import { display } from "@mui/system";
import blank from "../buddyList/blank.png"

export const BuddyList = ({ user }) => {
  const [profileThumbs, setProfileThumbs] = useState([]);

  const [switchTrue, setSwitchTrue] = useState(false);

  const [buddyPrompt, setBuddyPrompt] = useState();

  const notificationSwitch = () => {
    setSwitchTrue(true);
  };

  useEffect(() => {
    (async () => {
      const profileInfo = await fetchSingleUser(user.username);
      // const profiles = profileInfo.buddyRequests
      const profileArray = [];
      for (let i = 0; i < profileInfo.profile.buddyRequests.length; i++) {
        const singleProfile = await fetchSingleUser(
          profileInfo.profile.buddyRequests[i].username
        );
        profileArray.push(singleProfile);
        console.log("buddylist push profile", singleProfile);
      }
      console.log("buddylist profile array:", profileArray);
      setProfileThumbs(() => [...profileArray]);
      console.log("dhdhdhddh", profileThumbs);
    })();
  }, []);

  const checkLikes = async () => {
    const profileInfo = await fetchCheckLikes(user.username, setProfileThumbs);
    // console.log("BuddyList profile info is:", profileInfo);
    return profileInfo;
  };
  const handshake = (username, buddyname) => {
    console.log("handshake", username);
    //fetch request to both users to confirm they are buddies
    const confirmedBuddy = fetchConfirmBuddy(username, buddyname);
    const buddyPrompt = `Congrats  ${buddyname}  and you are now Gig Buddies!`;
    console.log(buddyPrompt);
  };

  try {
    return (
      <div>
        <div>
        
          <div    className={switchTrue ? "notification-card-closed" : "notification-card-open" } > <div className={switchTrue ? "notification-closed" : "notification-open"}>
            <img className="notification-picture" src={user.imageUrl ?  user.imageUrl: blank} alt="profile picture" />
            <div className="notifications">Notifications</div>
            {switchTrue ? (
              <IoIosArrowUp color="grey" className="arrow-up" size={20} onClick={() => setSwitchTrue(!switchTrue)}/>
            ) : (
              <IoIosArrowDown color="grey" className="arrow-up" size={20} onClick={() => setSwitchTrue(!switchTrue)}/>
            )}
</div>
             {switchTrue ? ""
          : <div>   {profileThumbs.map((item, index) => (
            <div className="buddy-requests">
           <img className="blank-image" src={item.profile.imageUrl ?     item.profile.imageUrl: blank} alt="s" />
               <p onClick={() => handshake(user.username, item.profile.username) } value={item.profile.username} className="buddy-name" > {item.profile.username} </p>
               <TbMessageCircle className="message-icon" size={20} color="grey"/>

             </div> 
            
             ))}
           </div>}  
        </div>  </div>
     
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};
