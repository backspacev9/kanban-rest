import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';

import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

import { BoardsModule } from '../boards/boards.module';
import { ColumnsModule } from '../columns/columns.module';
import { UsersModule } from '../users/users.module';

import { SearchService } from '../search/search.service';
import { SearchController } from '../search/search.controller';

@Module({
  providers: [TasksService, SearchService],
  controllers: [TasksController, SearchController],
  imports: [AuthModule, BoardsModule, ColumnsModule, UsersModule, TypeOrmModule.forFeature([Task])],
})
export class TasksModule {}
