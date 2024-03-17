import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("GBP");
  const [toCurr, setToCurr] = useState("PLN");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
        );
        const data = await res.json();
        setConverted(data.rates[toCurr]);
        setIsLoading(false);
      }

      if (fromCurr === toCurr) return setConverted(amount);

      convert();
    },
    [amount, fromCurr, toCurr]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        disabled={isLoading}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurr}
        disabled={isLoading}
        onChange={(e) => setFromCurr(e.target.value)}
      >
        <option value="GBP">GBP</option>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
      <select
        value={toCurr}
        disabled={isLoading}
        onChange={(e) => setToCurr(e.target.value)}
      >
        <option value="GBP">GBP</option>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <p>
        {converted} {toCurr}
      </p>
    </div>
  );
}
