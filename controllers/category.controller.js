const { messageConstant } = require('../constant/category.message');
const Category = require('../models/category.model');

async function getAllCategorys() {
    try {
        let categoryAll;
        await Category.find().then((result) => {
            categoryAll = result.filter((item) => item.name != null);
        });
        return {
            success: true,
            data: categoryAll,
            message: messageConstant.get_all_success
        };
    } catch (err) {
        return { success: false, message: "Catchphrases not found" };
    }
}

async function getCategoryById(id) {
    let category;
    try {
        category = await Category.findById(id);
        if (category == null) {
            return { success: false, message: messageConstant.one_failed };
        }
    } catch (err) {
        return { success: false, message: messageConstant.one_failed };
    }

    return {
        success: true,
        data: category,
        message: messageConstant.get_one_success
    };
}




async function addCategory(body) {
    const category = new Category(body);
    let exsting = false;
    await Category.find({ name: body.name }).then((res) => {
        console.log("res: ", res)
        if(res.length > 0){
            exsting = true;
        }
    });

    if(exsting){
        return {
            success: false,
            data: null,
            message: messageConstant.post_existing,
        };
    }
    try {
        const newCategory = await category.save();
        return {
            success: true,
            data: newCategory,
            message: messageConstant.success,
        };
    } catch (err) {
        return {
            success: false, message: messageConstant.failed
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
    let category;
    try {
        category = await Category.findById(id);
        if (category == null) {
            return { success: false, message: messageConstant.delete_one_failed, data: category };
        }

        try {
            await category.remove()
            return {
                success: true,
                message: messageConstant.delete_one_success,
                data: category
            };
        } catch (err) {
            return { success: false, message: messageConstant.delete_one_failed, data: category };
        }
    } catch (err) {
        return { success: false, message: messageConstant.delete_one_failed, data: category };
    }
}

module.exports = {
    getAllCategorys,
    getCategoryById,
    addCategory,
    updateCategory,
    removeCategory
}