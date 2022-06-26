const { messageConstant } = require("../constant/category.message");
const Template = require("../models/template.model");

async function addTemplate(body) {
    const template = new Template(body);
    let exsting = false;
    await Template.find({ name: body.name }).then((res) => {
        console.log("res: ", res)
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

module.exports = {
    addTemplate
}