import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LessonResolverBase } from "./base/lesson.resolver.base";
import { Lesson } from "./base/Lesson";
import { LessonService } from "./lesson.service";

@graphql.Resolver(() => Lesson)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LessonResolver extends LessonResolverBase {
  constructor(
    protected readonly service: LessonService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
