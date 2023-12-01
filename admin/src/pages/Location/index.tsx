import {PALETTE} from "styles";
import {getLocationName} from "utils";
import {Pencil, Plus, Trash} from "svg";
import {Fragment, useEffect} from "react";
import {CityModel, CountryModel} from "interfaces";
import {Row as RowLayout} from "components/@system";
import {useAppDispatch, useAppSelector} from "hooks";
import {IconBox, Typography} from "components/@system";
import {Cell, Row, Table} from "components/@system/Table";
import {cityPanelPayload, countryPanelPayload} from "./helper";
import {
  getCities,
  openPanel,
  deleteCity,
  getCountries,
  deleteCountry,
  prepareLocationForm,
  selectLocationState,
} from "redux/slices";

interface LocationProps {}

export const Location: React.FC<LocationProps> = () => {
  const dispatch = useAppDispatch();
  const {cities, countries} = useAppSelector(selectLocationState);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities());
  }, []);

  return (
    <Fragment>
      <Typography variant="title" marginBottom={15}>
        Create/Edit — Location
      </Typography>
      <Table
        heads={["ID", "Name", "Actions"]}
        gridTemplateColumns="250px minmax(100px, 200px) 1fr"
        title={
          <RowLayout gap={10}>
            <Typography variant="subtitle">Countries</Typography>
            <IconBox
              backgroundColor={PALETTE["PRIMARY"]}
              icon={<Plus strokeWidth={3} color={PALETTE["WHITE"]} />}
              onClick={() => {
                dispatch(
                  prepareLocationForm({
                    type: "country-form",
                    body: {} as CountryModel,
                  })
                );
                dispatch(openPanel(countryPanelPayload));
              }}
            />
          </RowLayout>
        }
      >
        {countries["data"].map(({id, name}, key, countries) => (
          <Row key={key}>
            <Cell>{id}</Cell>
            <Cell>{name}</Cell>
            <Cell gap={10}>
              <IconBox
                icon={<Pencil />}
                onClick={() => {
                  dispatch(openPanel(countryPanelPayload));
                  dispatch(
                    prepareLocationForm({
                      type: "country-form",
                      body: countries[key],
                    })
                  );
                }}
              />
              <IconBox
                icon={<Trash />}
                onClick={() => dispatch(deleteCountry(id))}
              />
            </Cell>
          </Row>
        ))}
      </Table>
      <Table
        style={{marginTop: "2rem"}}
        heads={["ID", "Name", "Country", "Actions"]}
        gridTemplateColumns="250px 1fr 1fr 1fr"
        title={
          <RowLayout gap={10}>
            <Typography variant="subtitle">Cities</Typography>
            <IconBox
              backgroundColor={PALETTE["PRIMARY"]}
              icon={<Plus strokeWidth={3} color={PALETTE["WHITE"]} />}
              onClick={() => {
                dispatch(
                  prepareLocationForm({
                    type: "city-form",
                    body: {} as CityModel,
                  })
                );
                dispatch(openPanel(cityPanelPayload));
              }}
            />
          </RowLayout>
        }
      >
        {cities["data"].map(({id, name, country_id}, key, cities) => (
          <Row key={key}>
            <Cell>{id}</Cell>
            <Cell>{name}</Cell>
            <Cell>{getLocationName(countries["data"], country_id)}</Cell>
            <Cell gap={10}>
              <IconBox
                icon={<Pencil />}
                onClick={() => {
                  dispatch(openPanel(cityPanelPayload));
                  dispatch(
                    prepareLocationForm({
                      type: "city-form",
                      body: cities[key],
                    })
                  );
                }}
              />
              <IconBox
                icon={<Trash />}
                onClick={() => dispatch(deleteCity(id))}
              />
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};
