import { useState, useEffect } from "react";

export default function User({ user }) {
  console.log("User-objekt:", user);
  //destructing pakker værdier ud af et objekt, hvilket sker ovenfor

  const [likes, setLikes] = useState(0);

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (likes === 5) alert("du har fået mange likes");
    console.log("hej");
  }, [likes]);

  return (
    <div className="user-card">
      <img src={user.image} />
      <h2>{user.name}</h2>
      {showDetails && (
        <div>
          <p>{user.mail}</p>
          <p>{user.title}</p>
          <p>{user.id}</p>
        </div>
      )}
      <button onClick={() => setLikes(likes + 1)}>Like: {likes}</button>
      <button onClick={() => setLikes(0)}>Reset likes</button>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Skjul" : "Vis"} detaljer
      </button>
    </div>
  );
}
