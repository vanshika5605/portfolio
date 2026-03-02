import { useEffect, useState } from "react";

const getTimeOfDayMessage = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12)
    return "Good morning — hope your coffee is as strong as my commits.";
  if (hour >= 12 && hour < 17)
    return "Good afternoon — let me make these few minutes worth your while.";
  if (hour >= 17 && hour < 21)
    return "Clocking out? Let me show you what I've been building.";
  return "Working late? So am I — welcome.";
};

const useTypingEffect = (speed = 45) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const message = getTimeOfDayMessage();

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(message.slice(0, i + 1));
      i++;
      if (i >= message.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [message, speed]);

  return { displayed, done };
};

export default useTypingEffect;
