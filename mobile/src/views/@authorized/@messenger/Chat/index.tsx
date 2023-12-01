import {NavigatorView} from "src/hoc";
import {useLayoutEffect, useMemo} from "react";
import {Skeleton} from "src/components/@skeletons";
import {ViewNavigationProps} from "src/interfaces";
import {ComponentManager} from "src/components/@system";
import {KeyboardAvoidingView, Platform} from "react-native";
import {useAppDispatch, useAppSelector, useLang} from "src/hooks";
import {getChatMessages, selectMessengerState} from "src/redux/slices";
import {
  Message,
  ToolBar,
  BoxInput,
  Messages,
  ChatContext,
  ProductPreview,
} from "src/components/@messenger/@chat";

interface ChatProps extends ViewNavigationProps<"Chat"> {}

export const Chat: React.FC<ChatProps> = ({route}) => {
  const {t} = useLang();
  const dispatch = useAppDispatch();
  const {conversation_id, withUser, partnerType, type, product} = route.params;
  const {chat, APIStatus} = useAppSelector(selectMessengerState);
  const {isLoading, error} = APIStatus["messages"];
  const {messages} = chat;

  useLayoutEffect(() => {
    dispatch(getChatMessages(conversation_id));
  }, [conversation_id]);

  const values = useMemo(
    () => ({withUser, partnerType, type, product}),
    [withUser, type]
  );

  return (
    <NavigatorView viewName="Chat">
      <ChatContext.Provider value={values}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={55}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{flex: 1, justifyContent: "flex-end"}}
        >
          <ToolBar />
          {type === "product" && <ProductPreview />}

          <ComponentManager
            data={messages}
            isError={error}
            isLoading={isLoading}
            skeleton={{placeholder: <Skeleton.Message />, howMany: 8}}
            error={{tryAgain: () => dispatch(getChatMessages(conversation_id))}}
            emptyUI={{
              title: t("no_messages"),
              helperText: t("be_the_first_to_say_hello"),
            }}
          >
            <Messages>
              {messages.map((message, key) => (
                <Message message={message} key={key} />
              ))}
            </Messages>
          </ComponentManager>
          <BoxInput />
        </KeyboardAvoidingView>
      </ChatContext.Provider>
    </NavigatorView>
  );
};
