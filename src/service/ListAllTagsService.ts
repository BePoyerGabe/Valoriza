import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository"
import { classToPlain } from "class-transformer"



class ListAllTagsService{
    async execute() {
        const tagsRepo = getCustomRepository(TagRepository)

        const tags = await tagsRepo.find()

        return classToPlain(tags)
    }
} 

export {ListAllTagsService}