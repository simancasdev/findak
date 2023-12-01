import {PALETTE} from "styles";
import {Style} from "interfaces";
import {Typography} from "../Typography";
import {AvatarStyled, Image, Placeholder} from "./styles";

interface AvatarProps extends Style {
  src: string;
  size?: number;
  name?: string;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  style,
  onClick,
  size = 30,
}) => {
  return (
    <AvatarStyled onClick={() => {}}>
      {src ? (
        <Image style={{width: size, height: size, ...style}} src={src} />
      ) : (
        <Placeholder style={{width: size, height: size, ...style}}>
          {typeof name !== "undefined" && (
            <Typography
              style={{color: PALETTE["WHITE"], fontSize: 14, fontWeight: 600}}
            >
              {name.slice(0, 1)}
            </Typography>
          )}
        </Placeholder>
      )}
    </AvatarStyled>
  );
};
