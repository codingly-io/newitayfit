import { StringFilter } from "../../util/StringFilter";
import { TrackWhereUniqueInput } from "../track/TrackWhereUniqueInput";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type LessonWhereInput = {
  id?: StringFilter;
  track?: TrackWhereUniqueInput;
  videos?: VideoListRelationFilter;
};
