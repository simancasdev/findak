import {Send} from "src/svg";
import {Fragment} from "react";
import {PALETTE} from "src/styles";
import {compareIds} from "src/utils";
import {ButtonLoaderId} from "src/interfaces";
import {Button} from "src/components/@system";
import {canISendOffer} from "src/redux/thunks";
import {selectAuthState, selectSearchState} from "src/redux/slices";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";

interface SearchActionProps {}

export const SearchAction: React.FC<SearchActionProps> = () => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {search} = useAppSelector(selectSearchState);
  const {authUserId} = useAppSelector(selectAuthState);
  const {id} = search;
  const buttonLoaderId: ButtonLoaderId = `loader-${id}`;

  return compareIds([authUserId, search["user"]["id"]], "unequal") ? (
    <Button
      style={{marginTop: 10}}
      label={t("send_offer")}
      loaderId={buttonLoaderId}
      labelColor={PALETTE["WHITE"]}
      loaderColor={PALETTE["WHITE"]}
      icon={<Send color={PALETTE["WHITE"]} />}
      onPress={() => {
        dispatch(
          canISendOffer({
            loaderId: buttonLoaderId,
            search,
          })
        );
      }}
    />
  ) : (
    <Fragment />
  );
};
