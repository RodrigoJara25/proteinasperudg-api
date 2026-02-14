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
        this.marca = product.marca;
        this.precio = product.precio;
        this.precioOferta = product.precioOferta;
        this.images = product.images;
        this.presentaciones = product.presentaciones;
        this.sabores = product.sabores;
        this.usoIdeal = product.usoIdeal;
        this.ingredientes = product.ingredientes;
        this.idealPara = product.idealPara;
        this.isActive = product.isActive;
        this.createdAt = product.createdAt;
        this.updatedAt = product.updatedAt;
    }
}