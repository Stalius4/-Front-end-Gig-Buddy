import './App.css';
import { useEffect, useState} from 'react';

import { Routes, Route } from 'react-router-dom';

import TestFunc from './components/test';
import BuddySwipe from './pages/buddySwipe/buddySwipe';
import Navbar from './components/navbar/NavBar';
import {SearchBar} from "./components/search/search" ;
import {EventList} from "./components/eventList/eventList";

import {fetchEvents, fetchAttendees, trendingEvent} from "./utils/fetchReq"

import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile/Profile';
import { PopularEvents } from './components/popularEvents/popularEvents';
import { LogOrSign, LogOut, DeleteUser } from './components/LogorSign/LogorSign';



function App() {

  
 const [value, setValue] = useState("");
 const [apiData, setApiData] = useState([])
 const [trendingEvents, setTrendingEvents] = useState([])
const [displayEvent, setDisplayEvent] =useState ([])






  useEffect (() => {
    fetchEvents(setApiData)
    trendingEvent(setTrendingEvents)
 
  }, [])

  try {

  return (
    <div className="App">
      
    <>
      {/* <Navbar displayEvent={displayEvent} setDisplayEvent={setDisplayEvent} value={value} setValue={setValue} apiData={apiData} /> */}
      <Routes>
        <Route path="/" element={ <LogOrSign />} />
        <Route path="/messages" element={ <Messages />}  />
        <Route path="/profile" element={ <Profile />}  />
        <Route path="/login" element={ <LogOrSign />}  />
        <Route path="/event" element={ <EventList displayEvent={displayEvent} />}  />
        <Route path="/buddySwipe" element={ <BuddySwipe />} />
        
       </Routes>
    </>


      </div>

  );
  } catch (error) {
    console.log(error);
  }
}


export default App;


