import React from 'react'

const Greet = () => {
  const date = new Date().toLocaleDateString();
  const hour = new Date().getHours();
  let timeGreet;

  if (hour >= 0 && hour < 12) {
    timeGreet = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    timeGreet = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }

  return (
    <div>
      <p>Today is {date}</p>
      <p>{timeGreet}, Coders!</p>
    </div>
  );
};

export default Greet;
