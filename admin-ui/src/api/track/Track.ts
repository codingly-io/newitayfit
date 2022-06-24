import { Lesson } from "../lesson/Lesson";

export type Track = {
  createdAt: Date;
  id: string;
  lessons?: Array<Lesson>;
  updatedAt: Date;
};
