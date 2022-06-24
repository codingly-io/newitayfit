import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type LessonUpdateInput = {
  track?: TrackWhereUniqueInput | null;
};
