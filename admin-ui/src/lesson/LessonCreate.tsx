import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrackTitle } from "../track/TrackTitle";

export const LessonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="track.id" reference="Track" label="Track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
