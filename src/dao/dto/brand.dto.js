export default class BrandDTO {
    constructor(brand) {
        this.id = brand._id;
        this.marca = brand.marca;
        this.description = brand.description;
        this.logo = brand.logo;
        this.isActive = brand.isActive;
        this.createdAt = brand.createdAt;
        this.updatedAt = brand.updatedAt;
    }
}