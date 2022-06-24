import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";
import { VideoUpdateManyWithoutLessonsInput } from "./VideoUpdateManyWithoutLessonsInput";

export type LessonUpdateInput = {
  track?: TrackWhereUniqueInput | null;
  videos?: VideoUpdateManyWithoutLessonsInput;
};
