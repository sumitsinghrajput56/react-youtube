import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "valentines",
  ];

  return (
    <div className="flex">
      {list.map((res) => (
        <Button key={res} name={res} />
      ))}
    </div>
  );
};

export default ButtonList;
