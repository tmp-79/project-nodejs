const { messageConstant } = require("../constant/category.message");
const Template = require("../models/template.model");

async function addTemplate(body) {
    const template = new Template(body);
    let exsting = false;
    await Template.find({ name: body.name }).then((res) => {
        if (res.length > 0) {
            exsting = true;
        }
    });

    if (exsting) {
        return {
            success: false,
            data: null,
            message: messageConstant.post_existing,
        };
    }
    try {
        const newTemplate = await template.save();
        return {
            success: true,
            data: newTemplate,
            message: messageConstant.success,
        };
    } catch (err) {
        return {
            success: false, message: messageConstant.failed
        };
    }
}

async function getAllTemplates() {
    try {
        let templateAll;
        await Template.find().then((result) => {
            templateAll = result.filter((item) => item.name != null);
        });
        return {
            success: true,
            data: templateAll,
            message: messageConstant.get_all_success
        };
    } catch (err) {
        return { success: false, message: "Template not found" };
    }
}

async function getTemplateById(id) {
    let template;
    try {
        template = await Template.findById(id);
        if (template == null) {
            return { success: false, message: messageConstant.one_failed };
        }
    } catch (err) {
        return { success: false, message: messageConstant.one_failed };
    }

    return {
        success: true,
        data: template,
        message: messageConstant.get_one_success
    };
}


async function removeTemplate(id) {
    let template;
    try {
        template = await Template.findById(id);
        if (template == null) {
            return { success: false, message: messageConstant.delete_one_failed, data: template };
        }

        try {
            await template.remove()
            return {
                success: true,
                message: messageConstant.delete_one_success,
                data: template
            };
        } catch (err) {
            return { success: false, message: messageConstant.delete_one_failed, data: template };
        }
    } catch (err) {
        return { success: false, message: messageConstant.delete_one_failed, data: template };
    }
}


module.exports = {
    addTemplate,
    getAllTemplates,
    getTemplateById,
    removeTemplate
}