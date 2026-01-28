import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  console.log("searchCache",searchCache);

  const dispatch = useDispatch();

  useEffect(() => {
    // API call
    // make an api call after every key press
    // but if the difference between 2 api call is <200ms>
    // decline the api call

    const timmer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions()
      }
    }, 20);

    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    console.log("data",data);
    const json = await data.json();

    setSuggestions(json[1]);

    // update cache 
    
    console.log("json[1]",json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }));
  };


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"
          onClick={() => toggleMenuHandler()}
        />

        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGhpfyPfZxmMk39fDQJRymuKUvP7kXzpTMg&s"
          />
        </a>
      </div>
      <div className="col-span-10  px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggetion && (
          <div className=" fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg">
            <ul className="px-5 py-2">
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
        />
      </div>
    </div>
  );
};

export default Head;
