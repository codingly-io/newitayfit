import { Lesson } from "../lesson/Lesson";

export type Track = {
  createdAt: Date;
  id: string;
  lessons?: Array<Lesson>;
  title: string | null;
  updatedAt: Date;
};
