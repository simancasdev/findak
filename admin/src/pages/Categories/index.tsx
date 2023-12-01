import {PALETTE} from "styles";
import {Pencil, Plus, Trash} from "svg";
import {CategoryModel} from "interfaces";
import {Fragment, useLayoutEffect} from "react";
import {Row as RowLayout} from "components/@system";
import {useAppDispatch, useAppSelector} from "hooks";
import {Typography, IconBox} from "components/@system";
import {CategoryForm} from "components/@panel-variant";
import {Cell, Row, Table} from "components/@system/Table";
import {ShowPanelPayload} from "redux/slices/panel/types";
import {
  openPanel,
  closePanel,
  getCategories,
  deleteCategory,
  selectCategoryState,
  prepareCategoryForm,
} from "redux/slices";

const panelPayload: ShowPanelPayload = {
  type: "categories-form",
  component: <CategoryForm />,
};

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  const dispatch = useAppDispatch();
  const {categories} = useAppSelector(selectCategoryState);

  useLayoutEffect(() => {
    dispatch(getCategories());
    return () => {
      dispatch(closePanel());
    };
  }, []);

  return (
    <Fragment>
      <RowLayout gap={15} marginBottom={15}>
        <Typography variant="title">Create/Edit — categories</Typography>
        <IconBox
          backgroundColor={PALETTE["PRIMARY"]}
          icon={<Plus strokeWidth={3} color={PALETTE["WHITE"]} />}
          onClick={() => {
            dispatch(prepareCategoryForm({} as CategoryModel));
            dispatch(openPanel(panelPayload));
          }}
        />
      </RowLayout>
      <Table
        heads={["ID", "Name", "Type", "Actions"]}
        gridTemplateColumns="250px repeat(3, 1fr)"
      >
        {categories["data"].map(({id, name, type}, key, categories) => (
          <Row key={key}>
            <Cell>{id}</Cell>
            <Cell>{name}</Cell>
            <Cell>{type}</Cell>
            <Cell gap={10}>
              <IconBox
                icon={<Pencil />}
                onClick={() => {
                  dispatch(prepareCategoryForm(categories[key]));
                  dispatch(openPanel(panelPayload));
                }}
              />
              <IconBox
                icon={<Trash />}
                onClick={() => dispatch(deleteCategory(id))}
              />
            </Cell>
          </Row>
        ))}
      </Table>
    </Fragment>
  );
};
