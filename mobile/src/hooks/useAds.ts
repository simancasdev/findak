import {ButtonLoaderId} from "src/interfaces";
import {useAppDispatch} from "./useAppDispatch";
import {toggleButtonLoader} from "src/redux/slices";
import {useCallback, useEffect, useState} from "react";
import {
  TestIds,
  RewardedAd,
  RewardedAdEventType,
} from "react-native-google-mobile-ads";

export const adsButtonLoaderId: ButtonLoaderId = "loader-ads";

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

export const useAds = ({onEarnedReward}: {onEarnedReward: () => void}) => {
  const dispatch = useAppDispatch();
  const [adsLoaded, setAdsLoaded] = useState<boolean>(false);

  const openAds = useCallback(() => {
    if (adsLoaded) rewarded.show();
  }, [adsLoaded]);

  useEffect(() => {
    rewarded.load();
    dispatch(toggleButtonLoader(adsButtonLoaderId));

    const unsubscribeLoaded = rewarded.addAdEventListener(
      RewardedAdEventType.LOADED,
      () => {
        dispatch(toggleButtonLoader(adsButtonLoaderId));
        setAdsLoaded(true);
      }
    );

    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      () => {
        onEarnedReward();
      }
    );

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  return {
    openAds,
  };
};
