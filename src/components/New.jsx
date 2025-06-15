import { useEffect, useState } from "react";
import Button from "./Button";
import Rating from "./Rating";
const myMoods = [
  "😊",
  "🤣",
  "😒",
  "🤐",
  "🙄",
  "🤦‍♀️",
  "😢",
  "😡",
  "🤢",
  "😠",
  "😰",
  "🥴",
  "😌",
  "😣",
  "😐",
  "😑",
  "😶",
];

const New = () => {
  const [mood, setMood] = useState("😂");
  const [entry, setEntry] = useState("");
  const [movieOrBook, setMovieOrBook] = useState("");
  const [stored, setStored] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRating = (rateNum) => {
    setRating(rateNum);
  };
  const newEntry = {
    EnteredDate: new Date().toDateString(),
    EnteredTime: new Date().toLocaleTimeString(),
    EnteredMood: mood,
    EnteredEntry: entry,
    EnteredMovieOrBook: movieOrBook,
    EnteredRating: rating,
  };
  useEffect(() => {
    setStored(JSON.parse(localStorage.getItem("entries")));
  }, []);

  const submitEntries = () => {
    if (mood.trim() || entry.trim() !== "") {
      const stored = JSON.parse(localStorage.getItem("entries")) || [];
      const updated = [newEntry, ...stored];
      localStorage.setItem("entries", JSON.stringify(updated));
      console.log(updated);
      setStored(updated);
    }
    // Optional: Clear fields after submission
    setEntry("");
    setMovieOrBook("");
    setRating(0);
    setMood("😂");
  };
  return (
    <>
      <div className="flex h-screen text-white">
        <div className="flex flex-col bg-gray-900 p-4 gap-1 w-1/2">
          {/* moods selector */}
          <h1>Select Your Mood for Today</h1>
          <div className="flex overflow-x-scroll cursor-pointer p-2 container">
            {myMoods.map((mood) => {
              return (
                <span
                  className="text-4xl hover:text-5xl transition-all"
                  onClick={() => {
                    setMood(mood);
                  }}
                >
                  {mood}
                </span>
              );
            })}
          </div>
          <div>
            <h1 className="text-2xl">Mood: {mood}</h1>
          </div>
          <div>
            <textarea
              className="w-full border-1 p-2 text-sm min-h-40"
              placeholder="enter your entry"
              onChange={(e) => {
                setEntry(e.target.value);
              }}
              value={entry}
            ></textarea>
          </div>
          <label htmlFor="movie">Any movie or book today?</label>

          <input
            type="text"
            className="w-full border-1 rounded-lg px-2 py-3 text-sm "
            placeholder="movie or book name"
            value={movieOrBook}
            onChange={(e) => {
              setMovieOrBook(e.target.value);
              console.log(movieOrBook);
            }}
          />
          <Rating onRate={handleRating} rating={rating} />
          <Button onClick={submitEntries} />
        </div>
        <div className="bg-gray-700 p-4 flex flex-col w-full gap-4 overflow-y-scroll">
          {stored &&
            stored.map((item) => {
              return (
                <div className="bg-gray-900 rounded-sm shadow-sm shadow-gray-950 p-10 flex flex-col gap-4">
                  <span className="">{item.EnteredDate}</span>
                  <span>Your Mood: {item.EnteredMood}</span>
                  <span>Your Entry: {item.EnteredEntry}</span>
                  <span>Movie or book you read: {item.EnteredMovieOrBook}</span>
                  <span>Movie rating: {item.EnteredRating} star(s)</span>
                  <span className="tracking-widest">{item.EnteredTime}</span>
                </div>
              );
            })}
          {!stored && <h1 className="text-3xl">No entry yet!</h1>}
        </div>
      </div>
    </>
  );
};
export default New;
