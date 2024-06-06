import { useEffect, useState } from "react";
import ItemAccordion from "./ItemAccordion";

export default function Accordion() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    const url = "https://type.fit/api/quotes";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setQuotes(result);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="accordion">
      {quotes.length > 0 ? (
        quotes
          .slice(0, 10)
          .map((quote, index) => (
            <ItemAccordion
              key={index}
              num={index}
              title={quote.author ? quote.author : "Unknown Author"}
              description={quote.text}
            />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
