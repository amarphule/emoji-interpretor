import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😇": "Smiling Face with Halo",
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "💻": "Technologist",
  "❤": "Red Heart",
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🥺": "Pleading Face"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("translation will appear here...");

  const emojiClickHandler = (item) => {
    const meaning = emojiDictionary[item];
    setMeaning(meaning);
  };

  const emojiChangeHandler = () => {
    const emojiMeaning = emojiDictionary[event.target.value];
    console.log(emojiMeaning)
    if(emojiMeaning === undefined){
      setMeaning("We don't have this emoji, please select any of below one")
    }
    setMeaning(emojiMeaning);
  };
  return (
    <div className="App">
      <h1>Inside out</h1>
      <h3>Smileys & People</h3>
      <input
        placeholder="Put one emoji here to know meaning"
        style={{ width: "80%", padding: "1rem" }}
        onChange={emojiChangeHandler}
      />
      <h3>{meaning}</h3>
      <div style={{ margin: "1rem" }}>
        {emojiList.map((item) => {
          return (
            <span
              onClick={() => emojiClickHandler(item)}
              key={item}
              style={{ fontSize: "2rem", margin: "1rem" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
