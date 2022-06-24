import { Track as TTrack } from "../api/track/Track";

export const TRACK_TITLE_FIELD = "id";

export const TrackTitle = (record: TTrack): string => {
  return record.id || record.id;
};
