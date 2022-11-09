import React, { useState, useContext, useEffect } from "react";
import { v4 as id } from "uuid";

const GlobalContext = React.createContext();

export function GlobalContextWrapper({ children }) {
  const storage = JSON.parse(localStorage.getItem("ParkingLotState"));

  const initialEntrancesState = [
    { id: id(), defaultPosition: { x: 100, y: 250 } },

  ];
  const initialParkingSlotsState = [
    { id: id(), defaultPosition: { x: 300, y: 100 }, size: "Bike" },
    { id: id(), defaultPosition: { x: 500, y: 100 }, size: "Car" },
    { id: id(), defaultPosition: { x: 700, y: 100 }, size: "Van" },

  ];

  const [entrances, setEntrances] = useState(
    storage?.Entrances || initialEntrancesState
  );
  const [parkingSlots, setParkingSlots] = useState(
    storage?.ParkingSlots || initialParkingSlotsState
  );
  const [exited, setExited] = useState(storage?.Exited || []);

  const [editing, setEditing] = useState(false);
  const [forManaging, setForManaging] = useState({});
  const [notification, setNotification] = useState({});
  const [mockDate, setMockDate] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "ParkingLotState",
      JSON.stringify({
        ParkingSlots: parkingSlots,
        Entrances: entrances,
        Exited: exited,
      })
    );
  }, [parkingSlots, entrances, exited]);

  return (
    <GlobalContext.Provider
      value={{
        ParkingSlots: [parkingSlots, setParkingSlots],
        Entrances: [entrances, setEntrances],
        ForManaging: [forManaging, setForManaging],
        Editing: [editing, setEditing],
        Exited: [exited, setExited],
        Notification: [notification, setNotification],
        MockDate: [mockDate, setMockDate],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
