import React, { useState, useEffect } from "react";
import axios from "axios";
import TotalRevenueCard from "./TotalRevenueCard";
import Progressbar from "../ChildComponents/Progressbar";

function TotalRevenue() {
  const [cards, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server
    axios.get("http://localhost:3001/cards").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <div className="container px-7 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cards.map((item) => (
            <TotalRevenueCard
              key={item.id}
              Heading={item.heading}
              Progressbar={
                <Progressbar
                  bgColor={item.progressbarColor}
                  ValuePercent={item.progressbarValue}
                />
              }
              Value={item.value}
              TextColor={item.textColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TotalRevenue;

