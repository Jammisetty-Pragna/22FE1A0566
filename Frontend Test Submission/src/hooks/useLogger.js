import { useEffect } from "react";

const useLogger = (event, data) => {
  useEffect(() => {
    if (data) {
      // log to console
      console.log(`[Logger] Event: ${event}`, data);

      // log to localStorage
      const existingLogs = JSON.parse(localStorage.getItem("logs")) || [];
      const newLog = { event, data, time: new Date().toLocaleString() };
      localStorage.setItem("logs", JSON.stringify([...existingLogs, newLog]));
    }
  }, [event, data]);
};

export default useLogger;
