import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LessonTitle } from "../lesson/LessonTitle";

export const VideoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="lesson.id" reference="Lesson" label="lesson">
          <SelectInput optionText={LessonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
