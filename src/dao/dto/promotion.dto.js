export default class PromotionDTO {
    constructor(promotion) {
        this.id = promotion._id;
        this.imagen = promotion.imagen;
        this.destacado = promotion.destacado;
        this.createdAt = promotion.createdAt;
        this.updatedAt = promotion.updatedAt;
    }
}
