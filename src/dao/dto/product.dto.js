export default class ProductDTO {
    constructor(product) {
        this.id = product._id;
        this.name = product.name;
        this.description = product.description;
        this.categoria = product.categoria ? {
            id: product.categoria._id || product.categoria,
            name: product.categoria.name,
            description: product.categoria.description
        } : null;

        this.marca = product.marca ? {
            id: product.marca._id || product.marca,
            marca: product.marca.marca  // Solo el nombre de la marca
        } : null;

        this.precioDesde = product.precioDesde;
        this.presentaciones = product.presentaciones;
        this.sabores = product.sabores;
        this.images = product.images;
        this.usoIdeal = product.usoIdeal;
        this.ingredientes = product.ingredientes;
        this.idealPara = product.idealPara;
        this.isActive = product.isActive;
        this.createdAt = product.createdAt;
        this.updatedAt = product.updatedAt;
    }
}