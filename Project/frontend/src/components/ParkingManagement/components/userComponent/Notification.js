import useGlobalContext from "../context/index";
import React, { useEffect } from "react";

function Notification() {
  const { Notification } = useGlobalContext();
  const [notification, setNotification] = Notification;

  useEffect(() => {
    if (notification.message)
      setTimeout(() => {
        setNotification({});
      }, 5000);
  }, [setNotification, notification]);

  return (
    <div
      className={`fixed inset-x-0 transform duration-500 text-center text-lg ${
        !notification?.message && "-translate-y-full"
      }`}
    >
      <div
        className={`min-w-max w-80 bg-${notification?.color}-500 mx-auto p-4 rounded-b-lg`}
      >
        {notification?.message}
      </div>
    </div>
  );
}

export default Notification;
