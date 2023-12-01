import {Fragment} from "react";
import {Typography} from "components/@system";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Fragment>
      <Typography variant="title">Home</Typography>
    </Fragment>
  );
};
