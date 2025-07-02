"use client";

import { useState, useEffect } from "react";

const page = () => {
  const [jokes, setJokes] = useState<string[]>();

  const fetchdata = async () => {
    const url = "https://v2.jokeapi.dev/joke/Programming?amount=10";
    try {
      const response = await fetch(url);
      const result = await response.json();
      const extractedJokes = result.jokes.map((joke: any) => {
        if (joke.type === "single") return joke.joke;
        else return `${joke.setup} — ${joke.delivery}`;
      });

      setJokes(extractedJokes);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(jokes);

  return (
    <div>
      {jokes?.map((joke, id) => {
        return (
          <div key={id}>
            {" "}
            <h1 className="mb-3">{joke}</h1>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default page;
