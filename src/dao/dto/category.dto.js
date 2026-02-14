export class CategoryDTO {
    constructor(category) {
        this.id = category._id;
        this.name = category.name;
        this.description = category.description;
        this.createdAt = category.createdAt;
        this.updatedAt = category.updatedAt;
    }
}

export class CreateCategoryDTO {
    constructor(data) {
        this.errors = {};

        // validar nombre
        if (!data.name || data.name.trim() === '') {
            this.errors.name = 'El nombre es obligatorio';
        } else {
            this.name = data.name.trim().toLowerCase();
        }

        // validar descripción
        if (data.description) {
            this.description = data.description.trim();
        }

        // si hay errores, lanzar excepción
        if (this.errors.length > 0) {
            throw new Error(this.errors.join(', '));
        }
    }

    getData() {
        return {
            name: this.name,
            description: this.description
        };
    }
}

export class UpdateCategoryDTO {
    constructor(data) {
        this.errors = [];
        const updates = {};

        // Validar nombre (opcional en update)
        if (data.name !== undefined) {
            if (data.name.trim() === '') {
                this.errors.push('El nombre no puede estar vacío');
            } else {
                updates.name = data.name.trim().toLowerCase();
            }
        }

        // Validar descripción (opcional)
        if (data.description !== undefined) {
            updates.description = data.description.trim();
        }

        // Si hay errores, lanzar excepción
        if (this.errors.length > 0) {
            throw new Error(this.errors.join(', '));
        }
        this.updates = updates;
    }

    // Método para obtener datos limpios
    getData() {
        return this.updates;
    }
}