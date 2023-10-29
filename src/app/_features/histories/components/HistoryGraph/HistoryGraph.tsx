import React from "react";

export const HistoryGraph: React.FC = async () => {
  const res = await fetch(
    "http://localhost:3000/api/histories"
  );
  const json = await res.json();
  const histories = json.data;

  return (
    <>
      <p>history graph</p>
      {histories.map((history) => (
        <div key={history.id}>
          <p>id: {history.id}</p>
          <p>date: {history.date}</p>
          <p>score: {history.score}</p>
        </div>
      ))
      }
    </>
  )
}
