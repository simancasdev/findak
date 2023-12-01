import {
  Children,
  EmptyManager,
  ErrorManager,
  SkeletonManager,
} from "src/interfaces";

export interface ComponentManagerProps extends Children {
  isError: boolean;
  data: any[] | {};
  isLoading: boolean;
  error: ErrorManager;
  emptyUI?: EmptyManager;
  skeleton: SkeletonManager;
  preventLoadingStateOnRefresh?: boolean;
}
