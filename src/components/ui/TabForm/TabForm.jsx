import { Component } from "lucide-react";
import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import "../TabForm/TabFrom.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: 0,
    email: "",
    interests: [],
    theme: "dark",
  });

  const [error,setError] = useState({
    name:"",
    age:"",
    email:"",
    interests:""
  })

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate:()=> {
        const error = {};

        if(!data.name || data.name.length < 3){
          error.name = "Name is not Valid"
        }

        if(!data.age || data.age < 18){
          error.age = "Age is Not Valid"

        }

        if(!data.email || data.email.length < 2) {
          error.email = "Email is not Valid"
        }

        setError(error)

        return error.name || error.age || error.email ? false : true
      }
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const error = {};

        if(data.interests.length < 1) {
          error.interests = "Select Atleast one interest"
        }

        setError(error);
        return error.interests ? false : true
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate:()=> {
        return true
      }
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if(tabs[activeTab].validate()) {

      setActiveTab((prevState) => prevState + 1);
    }
  };

  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleSubitClick = () => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  useEffect(() => {
    const loadData = localStorage.getItem("formData");
    if (loadData) {
      setData(JSON.parse(loadData));
    }
  }, []);

  return (
    <>
      <div className={`heading_container ${data.theme}`}>
        {tabs.map((t, i) => (
          <div key={i} className="heading" onClick={(e) => setActiveTab(i)}>
            {t.name}
          </div>
        ))}
      </div>
      <div className={`tab_body  ${data.theme}`}>
        <ActiveTabComponent data={data} setData={setData} errors={error}/>
      </div>
      <div className="submit_button_container">
        {activeTab > 0 && (
          <button className="submit_button" onClick={handlePrevClick}>
            Prev
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button className="submit_button" onClick={handleSubitClick}>
            Submit
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="submit_button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default TabForm;
