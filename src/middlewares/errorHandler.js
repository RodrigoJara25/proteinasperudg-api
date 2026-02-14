export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Error de validación de Mongoose
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            error: 'Error de validación',
            details: Object.values(err.errors).map(e => e.message)
        });
    }

    // Error de cast (ID inválido)
    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            error: 'ID inválido'
        });
    }

    // Error de duplicado (unique)
    if (err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        return res.status(400).json({
            success: false,
            error: `Ya existe una categoría con ese ${field}`
        });
    }

    // Error genérico
    res.status(500).json({
        success: false,
        error: err.message || 'Error interno del servidor'
    });
};