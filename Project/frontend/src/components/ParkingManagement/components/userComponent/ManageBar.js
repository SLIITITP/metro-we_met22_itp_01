import React from "react";
import useGlobalContext from "../context/index";
import { RiCloseFill, RiRoundedCorner } from "react-icons/ri";
import { BiExit } from "react-icons/bi";
import styled from "styled-components";
import { useState } from "react";

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

const types = ["Cash", "Comp"];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
    </>
  );
}

function ManageBar() {
  const { ForManaging, ParkingSlots, Exited, MockDate } = useGlobalContext();
  const [forManaging, setForManaging] = ForManaging;
  const [, setParkingSlots] = ParkingSlots;
  const data = forManaging?.content;
  const [exited, setExited] = Exited;
  const [mockDate] = MockDate;

  const hours = (
    Math.abs(
      (mockDate ? new Date(mockDate) : new Date()) - new Date(data?.entry)
    ) / 36e5
  ).toFixed(2);

  const price = {
    Bike: localStorage.getItem("bikeVal") || 20,
    Car: localStorage.getItem("carVal") || 60,
    Van: localStorage.getItem("vanVal") || 100,
  };

  const getBill = (hours) => {
    if (hours >= 24) return 5000;
    return price[data?.size];
  };

  const handleExit = () => {
    setParkingSlots((P) =>
      P.map((p) =>
        p.occupied === data?.occupied ? { ...p, occupied: false } : p
      )
    );
    setExited([...exited, { exit: new Date(), plate: data.occupied }]);
    setForManaging({});
  };

  return (
    <div
      className={`${
        !forManaging.open && "translate-y-full z-50"
      } transform duration-500 fixed bottom-0 inset-x-0`}
    >
      <div className="bg-blue-500 mx-auto min-w-max w-96  p-4 px-6 rounded-t-lg relative flex text-2xl justify-between items-end">
        <RiCloseFill
          onClick={() => setForManaging({})}
          className="absolute right-1 top-1 cursor-pointer"
        />
        <div>
          <p>plate: {data?.occupied}</p>
          <p>time: {hours} hr/s</p>
          <p>Total payment: {getBill(Math.ceil(hours))} LKR</p>
          <div>
            <TabGroup />
          </div>

          <BiExit
            title="UNPARK"
            className="text-4xl cursor-pointer"
            onClick={() => handleExit()}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageBar;
