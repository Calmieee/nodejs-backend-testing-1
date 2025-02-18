import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const newPost = postsService.create(post);
    expect(newPost).toHaveProperty("text", post.text);
    console.log(newPost);
    expect(newPost).toHaveProperty("id", "2");
    expect(newPost).toHaveProperty("date");
  });

  it('should find a post', () => {
    const foundPost = postsService.find("1");
    const notFoundPost = postsService.find("2");
    expect(foundPost).toHaveProperty("text", "Some pre-existing post");
    expect(foundPost).toHaveProperty("id", "1");
    expect(foundPost).toHaveProperty("date");
    expect(notFoundPost).toBeUndefined();
  });
});