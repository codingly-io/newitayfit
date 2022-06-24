/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LessonCreateNestedManyWithoutTracksInput } from "./LessonCreateNestedManyWithoutTracksInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class TrackCreateInput {
  @ApiProperty({
    required: false,
    type: () => LessonCreateNestedManyWithoutTracksInput,
  })
  @ValidateNested()
  @Type(() => LessonCreateNestedManyWithoutTracksInput)
  @IsOptional()
  @Field(() => LessonCreateNestedManyWithoutTracksInput, {
    nullable: true,
  })
  lessons?: LessonCreateNestedManyWithoutTracksInput;
}
export { TrackCreateInput };
