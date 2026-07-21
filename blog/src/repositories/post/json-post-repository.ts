import { PostModel } from "@/src/models/post/post-model";
import { PostRepository } from "./post-repositoriy";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
    private async readFromDisk(){}

    async findAll(): Promise<PostModel[]> {}
}

export const PostRepository = new JsonPostRepository();

console.log(ROOT_DIR);
