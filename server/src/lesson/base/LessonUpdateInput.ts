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
import { TrackWhereUniqueInput } from "../../track/base/TrackWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { VideoUpdateManyWithoutLessonsInput } from "./VideoUpdateManyWithoutLessonsInput";
@InputType()
class LessonUpdateInput {
  @ApiProperty({
    required: false,
    type: () => TrackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TrackWhereUniqueInput)
  @IsOptional()
  @Field(() => TrackWhereUniqueInput, {
    nullable: true,
  })
  track?: TrackWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => VideoUpdateManyWithoutLessonsInput,
  })
  @ValidateNested()
  @Type(() => VideoUpdateManyWithoutLessonsInput)
  @IsOptional()
  @Field(() => VideoUpdateManyWithoutLessonsInput, {
    nullable: true,
  })
  videos?: VideoUpdateManyWithoutLessonsInput;
}
export { LessonUpdateInput };
