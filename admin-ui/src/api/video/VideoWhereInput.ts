import { StringFilter } from "../../util/StringFilter";
import { LessonWhereUniqueInput } from "../lesson/LessonWhereUniqueInput";

export type VideoWhereInput = {
  id?: StringFilter;
  lesson?: LessonWhereUniqueInput;
};
