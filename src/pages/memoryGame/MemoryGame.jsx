import React, { useEffect, useState } from "react";


const generateShuffledCards = (size) => {
  const totalCards = size * size;
  const totalPairs = totalCards / 2;
  const numbers = Array.from({length: totalPairs}, (_,i) => i + 1)
  const pairedNumbers = [...numbers,...numbers];

  console.log(pairedNumbers)
  const cards = pairedNumbers.map((num)=>({
    id:crypto.randomUUID(),
    value:num,
    isFlipped:false,
    isMatched:false
  }))

const shuffledCards = cards.sort(() => Math.random() - 0.5);
return shuffledCards
}

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(null);
  const [cards, setCards] = useState([]);

  const [flipped, setFlipped] = useState([]);
  const [locked, setLocked] = useState(false);
  const [won,setWon] = useState(false)

  useEffect(()=>{
    setCards(

      generateShuffledCards(gridSize)
    )
  },[gridSize])


  const handleFlip = (card)=>{
    if (locked || card.isFlipped || card.isMatched) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    const newFlipped = [...flipped, card];

    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLocked(true);
      setTimeout(() => {
        const [first, second] = newFlipped;
        let updatedCards = [...newCards];

        if (first.value === second.value) {
          updatedCards = updatedCards.map((c) =>
            c.value === first.value ? { ...c, isMatched: true } : c
          );
        } else {
          updatedCards = updatedCards.map((c) =>
            c.id === first.id || c.id === second.id
              ? { ...c, isFlipped: false }
              : c
          );
        }

        setCards(updatedCards);
        setFlipped([]);
        setLocked(false);

        if (updatedCards.every((c) => c.isMatched)) {
          setWon(true);
        }
      }, 800);
    }
  }

  return (
    <div className="flex flex-col gap-3 items-center min-h-screen">
      <h1 className="font-bold text-xl mb-10 text-center">🧠 Memory Game</h1>

      <div>
        <label htmlFor="sizeinput" className="text-lg">
          Grid Size :
        </label>
        <input
          type="number"
          name="sizeinput"
          className="bg-gray-700 p-2 rounded-sm font-mono ms-2 w-16 border-none outline-none"
          placeholder="inter Size to Start"
          onChange={(e) => setGridSize(e.target.value)}
        />
      </div>

      {gridSize && (
        <div
          className={`grid gap-4 `}
          style={{
            gridTemplateColumns: `repeat(${gridSize}, minmax(60px,1fr)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleFlip(card)}
              className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded text-xl font-bold
                ${
                  card.isFlipped || card.isMatched
                    ? "bg-blue-500"
                    : "bg-gray-700"
                }
                transition-transform duration-300 cursor-pointer select-none`}
            >
              {card.isFlipped || card.isMatched ? card.value : "?"}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center justify-between w-full max-w-md mb-4">
        <button
          className="bg-red-600 px-4 py-2 rounded"
          onClick={() => setGridSize(null)}
        >
          🔁 Reset
        </button>
        {won && <p className="text-green-400 font-bold">🎉 You Won!</p>}
      </div>
    </div>
  );
};

export default MemoryGame;
