export default class CategoryDTO {
    constructor(category) {
        this.id = category._id;
        this.name = category.name;
        this.description = category.description;
        this.createdAt = category.createdAt;
        this.updatedAt = category.updatedAt;
    }
}