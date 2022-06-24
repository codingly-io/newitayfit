import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";
import { VideoCreateNestedManyWithoutLessonsInput } from "./VideoCreateNestedManyWithoutLessonsInput";

export type LessonCreateInput = {
  track?: TrackWhereUniqueInput | null;
  videos?: VideoCreateNestedManyWithoutLessonsInput;
};
