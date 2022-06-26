const { categoryMessage } = require('../constant/category.message');
const Category = require('../models/category.model');

async function getAllCategorys(search, reqPage, reqLimit) {
    try {
        const catchphrases = await Category.find()
        return {
            success: true,
            data: catchphrases,
            total: (await total).toString(),
            page: (await page).toString(),
            last_page: (await last_page).toString(),
        };
    } catch (err) {
        return { success: false, message: "Catchphrases not found" };
    }
}

async function getCategoryById(id) {
    let catchphrase;
    try {
        catchphrase = await Category.findById(id);
        if (catchphrase == null) {
            return { success: false, message: 'Cannot find catchphrase' };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }

    return {
        success: true,
        data: catchphrase,
    };
}




async function addCategory(body) {
    const category = new Category(body);

    try {
        const newCategory = await category.save();
        return {
            success: true,
            data: newCategory,
            message: categoryMessage.success,
        };
    } catch (err) {
        return {
            success: false, message: categoryMessage.failed
        };
    }
}

async function updateCategory(id, name = null, reqCatchphrase = null, movieContext = null) {
    let catchphrase;
    try {
        catchphrase = await Category.findById(id);
        if (catchphrase == null) {
            return { success: false, message: 'Cannot find catchphrase' };
        }
        if (name != null) {
            catchphrase.name = name
        }
        if (reqCatchphrase != null) {
            catchphrase.catchphrase = reqCatchphrase
        }
        if (movieContext != null) {
            catchphrase.movieContext = movieContext
        }

        try {
            const updatedCatchphrase = await catchphrase.save()
            return {
                success: true,
                data: updatedCatchphrase,
                message: "Catchphrase updated successfully"
            };
        } catch (err) {
            return { sucess: false, message: "Failed to update catachphrase" };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

async function removeCategory(id) {
    let catchphrase;
    try {
        catchphrase = await Category.findById(id);
        if (catchphrase == null) {
            return { success: false, message: 'Cannot find catchphrase' };
        }

        try {
            await catchphrase.remove()
            return {
                success: true,
                message: 'Deleted Catchphrase'
            };
        } catch (err) {
            return { success: false, message: err.message };
        }
    } catch (err) {
        return { success: false, message: err.message };
    }
}

module.exports = {
    getAllCategorys,
    getCategoryById,
    addCategory,
    updateCategory,
    removeCategory
}