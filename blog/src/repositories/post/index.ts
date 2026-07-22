import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repositoriy";

export const postRepository: PostRepository =  new JsonPostRepository();
