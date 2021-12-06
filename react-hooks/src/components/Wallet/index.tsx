import { useState } from "react";

export function Wallet() {
  const [showBalance, setShowBalance] = useState<boolean>(true)

  return (
    <>
    <h1>{JSON.stringify(showBalance)}</h1>
    <button onClick={() => setShowBalance((prevState) => !prevState)}
    >Toggle Balance</button>
    </>
  )
}