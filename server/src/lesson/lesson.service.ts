import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LessonServiceBase } from "./base/lesson.service.base";

@Injectable()
export class LessonService extends LessonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
