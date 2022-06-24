import { LessonCreateNestedManyWithoutTracksInput } from "./LessonCreateNestedManyWithoutTracksInput";

export type TrackCreateInput = {
  lessons?: LessonCreateNestedManyWithoutTracksInput;
  title?: string | null;
};
