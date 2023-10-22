import { useState, createContext } from "react";

export const IdContext = createContext({});

interface IdContextProps {
  children: React.ReactNode;
}

export const IdContextProvider = ({
  children,
}: IdContextProps): JSX.Element => {
  const [taskId, setTaskId] = useState(1);
  return (
    <IdContext.Provider
      value={{
        taskId,
        setTaskId,
      }}
    >
      {children}
    </IdContext.Provider>
  );
};
