import { useState, useEffect } from 'react';

const useTypewriter = (words, speed = 150, pause = 1500) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index >= words.length) { setIndex(0); return; }
    if (subIndex === words[index].length + 1 && !reverse) { setTimeout(() => setReverse(true), pause); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex((prev) => prev + 1); return; }
    const timeout = setTimeout(() => {
      if (words[index]) {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setText(words[index].substring(0, subIndex));
      }
    }, Math.max(reverse ? 75 : speed, parseInt(Math.random() * 50)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, pause]);
  return text;
};

export default useTypewriter;