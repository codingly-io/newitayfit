import { LessonCreateNestedManyWithoutTracksInput } from "./LessonCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  lessons?: LessonCreateNestedManyWithoutTracksInput;
};
