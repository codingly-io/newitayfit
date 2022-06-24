import { LessonUpdateManyWithoutTracksInput } from "./LessonUpdateManyWithoutTracksInput";

export type TrackUpdateInput = {
  lessons?: LessonUpdateManyWithoutTracksInput;
  title?: string | null;
};
