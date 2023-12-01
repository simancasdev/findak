import {STYLES} from "./styles";
import {Ads, Crown} from "src/svg";
import {Image} from "react-native";
import {SendOffer} from "../SendOffer";
import {ViewParam} from "src/interfaces";
import {UpgradeAccountProps} from "./types";
import {PALETTE, styleOS} from "src/styles";
import {CreateSearch} from "../CreateSearch";
import {useNavigation} from "@react-navigation/native";
import {CREATE_SEARCH_SNAP_POINTS} from "../CreateSearch/sheet-snap-points";
import {adsButtonLoaderId, useAds, useAppDispatch, useLang} from "src/hooks";
import {Button, Column, RowButton, Typography} from "src/components/@system";
import {closeSheet, openSheet, resetCreateSearchState} from "src/redux/slices";

export const UpgradeAccount: React.FC<UpgradeAccountProps> = ({
  reason,
  title,
  helperText,
}) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation<ViewParam<"BecomePremium">>();

  const {openAds} = useAds({
    // after reward is earned we execute this callback to evaluate the reason type
    // of why user is watching the ads and let user continue with their flow.
    onEarnedReward: () => {
      switch (reason["type"]) {
        case "send-offer":
          const {search} = reason["payload"];
          dispatch(openSheet({view: <SendOffer search={search} />}));
          break;

        case "create-search":
          dispatch(
            openSheet({
              view: <CreateSearch />,
              enablePanDownToClose: true,
              onBackdrop: () => dispatch(resetCreateSearchState()),
              snapPoints: CREATE_SEARCH_SNAP_POINTS["select-search-type"],
            })
          );
          break;

        default:
          console.error(`reason type: ${reason["type"]} is not handled`);
      }
    },
  });

  return (
    <Column style={STYLES["upgrade_account"]} gap={18}>
      <Column gap={10}>
        <Image
          source={require("src/images/png/sad.png")}
          style={{resizeMode: "contain", height: 55, width: 55}}
        />
        <Typography fontSize={17} fontWeight={styleOS("600")}>
          {title}
        </Typography>
        <Typography fontSize={13}>{helperText}</Typography>
      </Column>
      <Column style={{width: "100%"}}>
        <RowButton
          iconBoxColor={PALETTE["SECONDARY"]}
          style={{backgroundColor: PALETTE["PRIMARY"]}}
          icon={<Crown color={PALETTE["WHITE"]} size={14} />}
          helperText={t("offers_unlimited_searches_and_more")}
          label={`${t("upgrade_your_account_to")} Findak Premium`}
          helperTextStyle={{fontSize: 11, color: PALETTE["WHITE"]}}
          labelStyle={{
            color: PALETTE["WHITE"],
            fontSize: 12,
            fontWeight: "600",
          }}
          onPress={() => {
            navigate("BecomePremium");
            dispatch(closeSheet());
          }}
        />
        <Button
          onPress={openAds}
          loaderId={adsButtonLoaderId}
          labelColor={PALETTE["WHITE"]}
          loaderColor={PALETTE["WHITE"]}
          label={t("view_an_ads_and_continue")}
          icon={<Ads color={PALETTE["WHITE"]} />}
          style={{backgroundColor: PALETTE["SECONDARY"]}}
        />
      </Column>
    </Column>
  );
};
