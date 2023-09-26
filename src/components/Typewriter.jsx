import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const texts = ["Developer", "Designer", "Teacher"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (charIndex < texts[index].length) {
          setCurrentText(
            (prevText) => prevText + texts[index].charAt(charIndex)
          );
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setCurrentText("");
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000); // Delay before starting to erase
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prevText) => prevText.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
        }
      }
    }, 200); // Adjust typing and erasing speed here

    return () => clearInterval(interval);
  }, [charIndex, index, isTyping]);

  return (
    <span
      className="label"
      style={{
        color: "#d9832e",
        borderRight: "2px solid #d9832e",
      }}
    >
      {" "}
      {currentText}
    </span>
  );
};

export default Typewriter;
