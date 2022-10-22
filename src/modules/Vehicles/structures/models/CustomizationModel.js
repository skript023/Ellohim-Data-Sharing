import CustomizationSchema from '../schemas/CustomizationSchema.js'

export const create = (handling) => {
    return new CustomizationSchema(handling).save();
};

export const ensureUnique = async (share_code) => {
    return 0 == await CustomizationSchema.countDocuments({ share_code });
};

export const getAll = async (q) => {
    return CustomizationSchema.find(q);
};

export const getOne = async (q) => {
    return CustomizationSchema.findOne(q);
};

export const update = async(q, update) => {
    return CustomizationSchema.findOneAndUpdate(q, update, { new: true });
};

export default {
    create,
    ensureUnique,
    getAll,
    getOne,
    update
}