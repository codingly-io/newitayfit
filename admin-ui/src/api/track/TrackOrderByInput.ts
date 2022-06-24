import { SortOrder } from "../../util/SortOrder";

export type TrackOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
