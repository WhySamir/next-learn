"use client";
import { AlphaCards } from "@/app/components/AlphaCards";
import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";

const page = () => {
  const alphabet = "QWERTYUIOPASDFGHJKL;ZXCVBNM".split("");
  const guessWords = [
    "Animal",
    "Instagram",
    "Skribbl",
    "Gauchan",
    "Sports",
    "Movies",
    "Songs",
  ];
  const [selectedWord, setSelectedWord] = useState(() => {
    const randomIndex = Math.floor(Math.random() * guessWords.length);
    return guessWords[randomIndex];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[] | null>([]);
  const [isWordGuessed, setIsWordGuessed] = useState(false);
  // const [noofGuess, setnofofGuess] = useState<number>(selectedWord.length);
  const [noofGuess, setnofofGuess] = useState<number>(7);
  const checkGuess = (words: string[]) => {
    const lettersInWord = selectedWord.toUpperCase().split("");
    const isGuessed = lettersInWord.every((char) => words.includes(char));
    if (isGuessed) {
      setIsWordGuessed(true);
      console.log("Guess correct");
    }
  };

  const isLetterInWord = (letter: string) => {
    return selectedWord.toUpperCase().includes(letter);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (
        !alphabet.includes(key) ||
        guessedLetters?.includes(key) ||
        noofGuess <= 0 ||
        isWordGuessed
      )
        return;
      const guess = [...(guessedLetters || []), key];
      setGuessedLetters(guess);
      checkGuess(guess);

      if (!isLetterInWord(key)) {
        setnofofGuess((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guessedLetters, noofGuess, isWordGuessed]);

  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * guessWords.length);
    const newWord = guessWords[randomIndex];

    setGuessedLetters([]);
    setIsWordGuessed(false);
    // setnofofGuess(newWord.length);
    setnofofGuess(7);
    setSelectedWord(newWord);
  };

  return (
    <div className="lg:mt-12 flex flex-col  lg:flex-row w-full lg:justify-center lg:items-center">
      {" "}
      <div className=" w-full lg:w-1/2  h-full lg:h-[80vh] lg:mx-3">
        <div className="flex flex-col space-y-4 mx-3">
          <h1 className="lg:text-4xl ">
            {noofGuess <= 0 && !isWordGuessed
              ? "Game Over!"
              : `No of Chances Left: ${noofGuess}`}
          </h1>{" "}
          <div className=" flex flex-wrap gap-2 justify-center cursor-pointer">
            {alphabet.map((letter: string) => {
              const isGuessed = guessedLetters?.includes(letter);
              const isCorrect = isGuessed && isLetterInWord(letter);

              const cardColorClass =
                isGuessed && noofGuess > 0 && !isWordGuessed
                  ? isCorrect
                    ? "bg-[#5bba6f]" //green
                    : "bg-[#f21b3f]" //red
                  : "bg-[#323132] ";
              return (
                <AlphaCards
                  key={letter}
                  className={cardColorClass}
                  onClick={(e: any) => {
                    e.preventDefault();
                    if (
                      guessedLetters?.includes(letter) ||
                      noofGuess <= 0 ||
                      isWordGuessed
                    )
                      return;
                    const newGuessed = [...(guessedLetters || []), letter];
                    setGuessedLetters(newGuessed);
                    checkGuess(newGuessed);
                    console.log(newGuessed);

                    if (!isLetterInWord(letter)) {
                      setnofofGuess((prev) => prev - 1);
                    }
                  }}
                >
                  {letter === "Enter" ? <LogIn /> : letter}
                </AlphaCards>
              );
            })}
          </div>{" "}
          <div className="lg:mt-15 mx-5 items-center  flex gap-4">
            {selectedWord.split("").map((words: string) => (
              <div
                key={words}
                className="w-8 h-10 border-b-4 border-black text-4xl text-center"
              >
                {guessedLetters && guessedLetters.includes(words.toUpperCase())
                  ? words
                  : ""}
              </div>
            ))}
          </div>
          {isWordGuessed && (
            <>
              <h1 className="m-3 text-2xl">
                Congrats!!! Guessed correctly{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={resetGame}
                >
                  {" "}
                  Play again{" "}
                </span>
              </h1>
            </>
          )}{" "}
          {noofGuess <= 0 && (
            <>
              <h1 className="m-3 text-2xl">
                Oops!{" "}
                <span
                  className="text-blue-400 cursor-pointer"
                  onClick={resetGame}
                >
                  {" "}
                  Try again{" "}
                </span>
              </h1>
            </>
          )}
        </div>
      </div>
      <div className=" w-full overflow-hidden  lg:w-1/2 items-center flex   h-[80vh] ">
        <div className="line h-[80%]  w-1 bg-black ml-4 lg:mx-auto">
          <div className="line h-1  w-40 bg-black items-start justify-end flex">
            <div
              className={`relative ${
                noofGuess <= 0 && !isWordGuessed
                  ? "bg-white h-30 "
                  : "h-20   bg-black"
              }  w-1 items-start justify-end flex`}
            >
              {noofGuess <= 6 && (
                <>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center ">
                    {/* head */}
                    <div className="w-24 h-24 rounded-full border-4 border-black"></div>
                    {noofGuess <= 5 && (
                      <>
                        {/* body */}
                        <div className="relative h-40 w-1 bg-black ">
                          <div className="absolute top-0  left-1/2  -translate-x-1/2  w-40 flex justify-between">
                            {/* Left Arm */}
                            {noofGuess <= 4 && (
                              <div className="w-20 h-1 bg-black -rotate-[25deg] origin-right"></div>
                            )}
                            {/* Right Arm */}
                            {noofGuess <= 3 && (
                              <div className="w-20 h-1 bg-black rotate-[25deg] origin-left"></div>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    {/* <div className="flex w-full justify-between px-4 mt-[-4px]">
                      {noofGuess <= 2 && (
                        <div className="w-20 h-1 bg-black -rotate-[30deg] origin-right"></div>
                      )}
                      {noofGuess <= 1 && (
                        <div className="w-20 h-1 bg-black rotate-[30deg] origin-left"></div>
                      )}
                    </div> */}
                    {/* Legs */}
                    {noofGuess <= 2 && (
                      <div
                        className={`flex px-4 mt-[-4px] ${
                          noofGuess <= 1
                            ? "justify-between w-full"
                            : "justify-start"
                        }`}
                      >
                        {/* Left leg */}
                        <div
                          className={`w-20 h-1 bg-black -rotate-[30deg] origin-right ${
                            noofGuess === 2 && "-translate-x-1/2"
                          }`}
                        ></div>

                        {/* Right leg */}
                        {noofGuess <= 1 && (
                          <div className="w-20 h-1 bg-black rotate-[30deg] origin-left"></div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
