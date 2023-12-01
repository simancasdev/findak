import moment from "moment";
import {Fragment, useLayoutEffect} from "react";
import {useAppDispatch, useAppSelector} from "hooks";
import {Avatar, Typography} from "components/@system";
import {getUsers, selectUserState} from "redux/slices";
import {Cell, Row, Table} from "components/@system/Table";

interface UsersProps {}

export const Users: React.FC<UsersProps> = () => {
  const dispatch = useAppDispatch();
  const {users} = useAppSelector(selectUserState);

  useLayoutEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Fragment>
      <Typography variant="title">Users</Typography>
      <Table
        heads={["ID", "Full name", "Joined At", "Country"]}
        gridTemplateColumns="250px repeat(3, 1fr)"
      >
        {users["data"].map(
          (
            {id, first_name, last_name, avatar_url, createdAt, country, city},
            key
          ) => (
            <Row key={key}>
              <Cell>{id}</Cell>
              <Cell gap={10}>
                <Avatar src={avatar_url} name={first_name} />
                {first_name} {last_name}
              </Cell>
              <Cell>{moment(createdAt).format("MM/DD/YYYY")}</Cell>
              <Cell>{country["name"]}</Cell>
              {/* <Cell>{city["name"]}</Cell> */}
            </Row>
          )
        )}
      </Table>
    </Fragment>
  );
};
