import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TrackTitle } from "../track/TrackTitle";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="track.id" reference="Track" label="Track">
          <SelectInput optionText={TrackTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
