import { StringFilter } from "../../util/StringFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type LessonWhereInput = {
  id?: StringFilter;
  track?: TrackWhereUniqueInput;
};
