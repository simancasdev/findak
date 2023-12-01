import {Search} from "src/svg";
import {STYLES} from "./styles";
import {PALETTE} from "src/styles";
import {ButtonLoaderId} from "src/interfaces";
import {Touchable} from "src/components/@system";
import {canICreateSearch} from "src/redux/thunks";
import {selectLoaderState} from "src/redux/slices";
import {ActivityIndicator, Animated} from "react-native";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {useShowSearchButton} from "./hooks/useShowSearchButton";

interface SearchButtonProps {}

export const SearchButton: React.FC<SearchButtonProps> = () => {
  const dispatch = useAppDispatch();
  const {translateX} = useShowSearchButton();
  const {buttonLoaderIds} = useAppSelector(selectLoaderState);
  const loaderId: ButtonLoaderId = "loader-create-search";

  return (
    <Animated.View
      style={[STYLES["search_button"], {transform: [{translateX}]}]}
    >
      <Touchable
        style={STYLES["touchable"]}
        onPress={() => dispatch(canICreateSearch({loaderId}))}
      >
        {buttonLoaderIds.includes(loaderId) ? (
          <ActivityIndicator color={PALETTE["WHITE"]} />
        ) : (
          <Search size={25} strokeWidth={0.5} />
        )}
      </Touchable>
    </Animated.View>
  );
};
