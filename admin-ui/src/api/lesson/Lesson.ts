import { Track } from "../track/Track";

export type Lesson = {
  createdAt: Date;
  id: string;
  track?: Track | null;
  updatedAt: Date;
};
