import {useStorage} from "../../hooks";
import {AppTheme, Children} from "../../interfaces";
import {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";

type IContext = {
  theme: AppTheme;
  toggleTheme: (theme: AppTheme, saveTheme?: boolean) => void;
};

const ThemeContext = createContext<IContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}: Children) => {
  const [theme, setTheme] = useState<AppTheme>("light");
  const {read, save} = useStorage();

  const toggleTheme = useCallback(
    async (newTheme: AppTheme, saveTheme: boolean = true) => {
      if (saveTheme) await save("@theme", newTheme);
      setTheme(newTheme);
    },
    []
  );

  useEffect(() => {
    read<AppTheme>("@theme").then((schema) => {
      setTheme(schema || "light");
    });
  }, []);

  const values = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};
