import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TrackWhereInput = {
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  title?: StringNullableFilter;
};
