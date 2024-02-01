import React, { useState } from "react";
import "./style.css";
const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div className="switchingTabs h-[34px] bg-white rounded-[20px] p-[2px]">
      <div className="tabItems flex items-center h-[30px] relative">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem h-[100%] flex items-center justify-center w-[100px] text-[#04152d] text-[14px] relative z-10 cursor-pointer  ${
              selectedTab === index ? "active" : ""
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="movingBg h-[30px] w-[100px] rounded-[15px] absolute left-0 bg-gradient-to-r from-[#f89e00] to-[#da2f68] transition-left cubic-bezier-[0.88,-0.35,0.565,1.35] duration-400"
          style={{ left }}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
