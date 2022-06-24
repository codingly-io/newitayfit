import { Track } from "../track/Track";
import { Video } from "../video/Video";

export type Lesson = {
  createdAt: Date;
  id: string;
  track?: Track | null;
  updatedAt: Date;
  videos?: Array<Video>;
};
