import {STYLES} from "./styles";
import {Keyboard} from "react-native";
import {WIDTH_SCREEN} from "src/utils";
import {useEffect, useState} from "react";
import {selectAuthState} from "src/redux/slices";
import {DEFAULT_INPUT_STYLE, PALETTE} from "src/styles";
import {useAppSelector, useLang, useTheme} from "src/hooks";
import {useCommentManager} from "../CommentManager/context";
import {Row, Input, Avatar, Button, Column} from "src/components/@system";

interface CommentInputProps {}

export const CommentInput: React.FC<CommentInputProps> = () => {
  const {t} = useLang();
  const {colors} = useTheme();
  const [comment, setComment] = useState<string>("");
  const [showActions, setShowActions] = useState<boolean>(false);
  const {
    create,
    placeholder,
    createAPIstatus,
    onIsFocused = () => {},
  } = useCommentManager();
  const {avatar_url, first_name} = useAppSelector(selectAuthState)["user"];

  useEffect(() => {
    const {success} = createAPIstatus;
    if (success) {
      setComment("");
      setShowActions(false);
      Keyboard.dismiss();
    }
  }, [createAPIstatus]);

  return (
    <Column alignItems="flex-end" gap={0} style={STYLES["comment_input"]}>
      <Row gap={10} justifyContent="center" alignItems="center">
        <Avatar src={avatar_url} name={first_name} size={35} />
        <Input
          multiline
          value={comment}
          onFocus={() => onIsFocused(true)}
          onBlur={() => onIsFocused(false)}
          onPressIn={() => setShowActions(true)}
          onChangeText={(text) => setComment(text)}
          containerStyle={{width: WIDTH_SCREEN - 80}}
          placeholder={placeholder ?? t("write_a_comment")}
          style={{
            ...DEFAULT_INPUT_STYLE,
            minHeight: 40,
            paddingTop: 10,
            color: colors["WHITE_BLACK"],
            backgroundColor: colors["HOVER_LIGHT"],
          }}
        />
      </Row>
      {showActions && (
        <Row gap={0} fullWidth justifyContent="flex-end">
          <Button
            label={t("send")}
            style={STYLES["submit"]}
            labelStyle={{fontSize: 12}}
            labelColor={PALETTE["WHITE"]}
            onPress={() => create(comment)}
            disabled={!comment.length || createAPIstatus["isLoading"]}
          />
        </Row>
      )}
    </Column>
  );
};
