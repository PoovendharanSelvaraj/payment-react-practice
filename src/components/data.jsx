import { FaAmazon, FaApple } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Cards } from "./card";

var obj = {
  amazon: {
    date: "18/05/2022",
    logo: <FaAmazon fontSize="50px" />,
    next: <HiArrowRight fontSize="50px" />,
    name: "Amazon Gift",
    platform: "Pay",
    device: "Desktop - Mobile"
  },
  apple: {
    date: "18May2022",
    logo: <FaApple fontSize="50px" />,
    next: <HiArrowRight fontSize="50px" />,
    name: "Apple Gift",
    platform: "Payment",
    device: "MacOS - Mobile"
  }
};

export const Data = () => {
  return (
    <div>
      <Cards logos={obj.amazon} />
      <Cards logos={obj.apple} />
    </div>
  );
};
