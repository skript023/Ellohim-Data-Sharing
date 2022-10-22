import TeleportSchema from '../schemas/TeleportSchema.js'

export const create = (handling) => {
    return new TeleportSchema(handling).save();
};

export const ensureUnique = async (share_code) => {
    return 0 == await TeleportSchema.countDocuments({ share_code });
};

export const getAll = async (q) => {
    return TeleportSchema.find(q);
};

export const getOne = async (q) => {
    return TeleportSchema.findOne(q);
};

export const update = async(q, update) => {
    return TeleportSchema.findOneAndUpdate(q, update, { new: true });
};

export default {
    create,
    ensureUnique,
    getAll,
    getOne,
    update
}