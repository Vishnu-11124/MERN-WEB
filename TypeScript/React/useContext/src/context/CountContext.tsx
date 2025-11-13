import { createContext, useState, type FC } from "react";

type CountContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

type Provider = {
    children: React.ReactNode
}


export const CountContext = createContext<CountContextType | null>(null)

export const MyContextProvider :FC<Provider> = ({children} ) => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <CountContext.Provider value={{count, increment, decrement, reset}}>
            {children}
        </CountContext.Provider>
    )
}
