import {useMemo} from "react";
import {STYLES} from "./styles";
import {SearchProps} from "./types";
import {SearchContext} from "./context";
import {Touchable} from "../../@system";
import {useLang, useTheme} from "src/hooks";
import {Actions, Body, Footer, Head} from "./lib";
import {CommentManager} from "src/components/@comments";

export const Search: React.FC<SearchProps> = ({
  style,
  search,
  onPress,
  footerStyle,
  showActions = true,
  showComments = true,
  avatarRedirection = true,
  allowShowMoreBehavior = true,
}) => {
  const {t} = useLang();
  const {colors} = useTheme();
  const {comments, user} = search;
  const values = useMemo(
    () => ({
      search,
      showActions,
      footerStyle,
      avatarRedirection,
      allowShowMoreBehavior,
    }),
    [search]
  );

  return (
    <SearchContext.Provider value={values}>
      <Touchable
        disabled={typeof onPress === "undefined"}
        style={[
          STYLES["search"],
          {
            backgroundColor: colors["BACKGROUND_VIEW"],
          },
          style,
        ]}
        onPress={() => {
          if (typeof onPress === "undefined") return;
          onPress(search.id);
        }}
      >
        <Head />
        <Body />
        <Footer />
        {showActions && <Actions />}
      </Touchable>
      {showComments && (
        <CommentManager
          modelId={search["id"]}
          guideline={t("comments")}
          style={{paddingHorizontal: 15}}
          comments={showComments ? comments : undefined}
          placeholder={`${t("comment_the_search_of")} ${user["first_name"]}`}
        />
      )}
    </SearchContext.Provider>
  );
};
