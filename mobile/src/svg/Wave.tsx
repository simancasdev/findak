import {PALETTE} from "../styles";
import {SvgProps} from "../interfaces";
import {Path, Svg} from "react-native-svg";

export const Wave = ({color = PALETTE["BLACK"], style}: SvgProps) => (
  <Svg viewBox="0 0 1440 320" style={style}>
    <Path
      fillOpacity="1"
      fill={color}
      d="M0,192L60,213.3C120,235,240,277,360,293.3C480,309,600,299,720,266.7C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    />
  </Svg>
);
