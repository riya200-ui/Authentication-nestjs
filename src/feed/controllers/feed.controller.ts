import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() Post: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(Post);
  }

  // @Get()
  // findAll(): Observable<FeedPost[]> {
  //   return this.feedService.findAllPosts();
  // }

  //Pagination helps us divide the data into consumable chunks of information. In this post, we will specifically look at NestJS Prisma Pagination for REST APIs. Along with the theoretical aspects, we will also be creating actual code examples that can help you implement similar features for your own application.
  // @UseGuards(JwtGuard)
  @Get()
  findSelected(
    @Query('take') take = 1,
    @Query('skip') skip = 1,
  ): Observable<FeedPost[]> {
    take = take > 20 ? 20 : take;
    return this.feedService.findPosts(take, skip);
  }
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
