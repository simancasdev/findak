import {Column, Empty, Error} from "../";
import {ComponentManagerProps} from "./types";
import {Fragment, useLayoutEffect, useState} from "react";

export const ComponentManager: React.FC<ComponentManagerProps> = ({
  data,
  error,
  isError,
  emptyUI,
  children,
  skeleton,
  isLoading,
  preventLoadingStateOnRefresh = true,
}) => {
  const {placeholder, howMany = 1} = skeleton;
  const skeletons = Array.from(Array(howMany).keys());
  const [emptyState, setEmptyState] = useState<boolean>(false);
  const [preventLoadingState, setPreventLoadingState] = useState<boolean>(false);

  // Prevent to show again and again the loading state if user
  // do a pull refresh. If we want to avoid this prevention all that
  // we need to do is pass preventLoadingStateOnRefresh as 'false'
  useLayoutEffect(() => {
    if (!preventLoadingStateOnRefresh) return;
    if (!isLoading && !isError) {
      setPreventLoadingState(true);
    }
  }, [data, isLoading, isError, preventLoadingStateOnRefresh]);

  // Check if we have to show the empty state or not
  useLayoutEffect(() => {
    if (!isLoading && !isError) {
      if (Array.isArray(data)) {
        setEmptyState(!data.length);
        return;
      }
      const objKeys = Object.keys(data).length;
      setEmptyState(!objKeys);
    }
  }, [data, isLoading, isError]);

  return (
    <Fragment>
      {isLoading && !preventLoadingState ? (
        <Column>
          {skeletons.map((_, key) => (
            <Fragment key={key}>{placeholder}</Fragment>
          ))}
        </Column>
      ) : isError ? (
        <Error tryAgain={error["tryAgain"]} />
      ) : emptyState ? (
        <Empty emptyUI={emptyUI} />
      ) : (
        children
      )}
    </Fragment>
  );
};
