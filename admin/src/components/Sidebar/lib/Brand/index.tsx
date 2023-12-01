import {BrandStyled} from "./styles";

interface BrandProps {}

export const Brand: React.FC<BrandProps> = () => {
  return (
    <BrandStyled>
      <strong>FINDAK</strong>
    </BrandStyled>
  );
};
