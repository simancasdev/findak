import {useState} from "react";
import {api} from "src/services";
import {PALETTE} from "src/styles";
import {CheckCircle} from "src/svg";
import {useAppDispatch, useAppSelector} from "src/hooks";
import {SET_API_STATUS} from "src/redux/slices/status.api";
import {selectAuthState, showAlert} from "src/redux/slices";
import {APIStatus, SearchCommentModel} from "src/interfaces";

export const useCreate = (modelId: string) => {
  const dispatch = useAppDispatch();
  const {id} = useAppSelector(selectAuthState)["user"];
  const [newComments, setNewComments] = useState<SearchCommentModel[]>([]);
  const [createAPIstatus, setCreateAPIstatus] = useState<APIStatus>(
    SET_API_STATUS("initial", {isLoading: false, success: false, error: false})
  );

  const create = async (comment: string): Promise<void> => {
    try {
      setCreateAPIstatus((prev) => ({...prev, isLoading: true}));
      const commentCreated = await api.Post<SearchCommentModel>(
        "/searches/add/comment",
        {by: id, search_id: modelId, comment}
      );
      dispatch(
        showAlert({
          type: "success",
          icon: <CheckCircle color={PALETTE["WHITE"]} />,
          message: "Tu comentario fue enviado con éxito",
        })
      );
      setNewComments((prev) => [...prev, commentCreated]);
      setCreateAPIstatus((prev) => ({
        ...prev,
        isLoading: false,
        success: true,
      }));
    } catch (error) {
      const message = (error as Error).message;
      showAlert({message, type: "error", translate: false});
      setCreateAPIstatus((prev) => ({...prev, isLoading: false, error: true}));
    }
  };

  return {create, newComments, createAPIstatus};
};
