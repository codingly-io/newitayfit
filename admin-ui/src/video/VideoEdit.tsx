import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LessonTitle } from "../lesson/LessonTitle";

export const VideoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="lesson.id" reference="Lesson" label="lesson">
          <SelectInput optionText={LessonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
