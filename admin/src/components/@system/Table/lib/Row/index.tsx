import {RowStyled} from "./styles";
import {useTable} from "../../context";

interface RowProps {
  children: JSX.Element | JSX.Element[];
}

export const Row: React.FC<RowProps> = ({children}) => {
  const {defaultColumns} = useTable();

  return (
    <RowStyled style={{gridTemplateColumns: defaultColumns}}>
      {children}
    </RowStyled>
  );
};
