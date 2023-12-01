import {STYLES} from "./styles";
import {useTheme} from "src/hooks";
import {PALETTE} from "src/styles";
import {Edit, Trash} from "src/svg";
import {ButtonLoaderId, CollectionModel} from "src/interfaces";
import {IconBox, Row, Typography} from "src/components/@system";

interface ItemProps {
  collection: CollectionModel;
  onEdit: (collection: CollectionModel) => void;
  onRemove: (collection: CollectionModel, loaderId: ButtonLoaderId) => void;
}

export const Item: React.FC<ItemProps> = ({collection, onEdit, onRemove}) => {
  const {name, id} = collection;
  const {colors} = useTheme();
  const removeLoaderId: ButtonLoaderId = `loader-remove-${id}`;

  return (
    <Row style={STYLES["item"]} justifyContent="space-between">
      <Typography>{name}</Typography>
      <Row>
        <IconBox
          size={35}
          onPress={() => onEdit(collection)}
          icon={
            <Edit strokeWidth={3} size={18} color={colors["WHITE_BLACK"]} />
          }
        />
        <IconBox
          size={35}
          loaderId={removeLoaderId}
          onPress={() => onRemove(collection, removeLoaderId)}
          icon={<Trash strokeWidth={3} size={18} color={PALETTE["ERROR"]} />}
        />
      </Row>
    </Row>
  );
};
