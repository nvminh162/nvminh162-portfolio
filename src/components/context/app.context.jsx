import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [theme, setTheme] = useState(() => {
        const initialTheme = localStorage.getItem("theme") || "light";
        return initialTheme;
    });

    useEffect(() => {
        const mode = localStorage.getItem("theme");
        if (mode) {
            setTheme(mode);
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, [])

    return (
        <AppContext.Provider value={{
            theme, setTheme
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);

    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        );
    }

    return currentAppContext;
};
