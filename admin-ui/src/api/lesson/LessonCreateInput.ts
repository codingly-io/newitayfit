import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";

export type LessonCreateInput = {
  track?: TrackWhereUniqueInput | null;
};
