import { useState } from "react";

export default function TipCalc() {
  return (
    <>
      <Calc />
    </>
  );
}

function Calc() {
  const [bill, setBill] = useState(0);
  const [myServ, setMyServ] = useState(0);
  const [frServ, setFrServ] = useState(0);

  const tip = bill * ((myServ + frServ) / 2 / 100);

  function handleReset() {
    setBill(0);
    setFrServ(0);
    setMyServ(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <Service serv={myServ} onSetServ={setMyServ}>
        {" "}
        How did you like the service?
      </Service>
      <Service serv={frServ} onSetServ={setFrServ}>
        How did your friend like the service?
      </Service>
      {bill > 0 && (
        <>
          <Output tip={tip} bill={bill} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <span>How much was the bill:</span>
      <input
        min={1}
        type="number"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => {
          const value = Math.abs(e.target.value);
          onSetBill(value);
        }}
      ></input>
    </div>
  );
}

function Service({ serv, onSetServ, children }) {
  return (
    <div>
      <span>{children}</span>
      <select value={serv} onChange={(e) => onSetServ(+e.target.value)}>
        <option value={10}>dissatisfy - 0%</option>
        <option value={10}>okay - 10%</option>
        <option value={15}>very good - 15%</option>
        <option value={20}>amazing - 20%</option>
      </select>
    </div>
  );
}
function Output({ tip, bill }) {
  return (
    <div>
      <h1>
        You pay {bill + tip}£ ({bill}£ + {tip}£ tip)
      </h1>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
