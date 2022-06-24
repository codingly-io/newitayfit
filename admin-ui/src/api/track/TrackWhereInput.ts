import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type TrackWhereInput = {
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
};
