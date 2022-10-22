import mongoose from 'mongoose'

const customizationData = new mongoose.Schema({
    user_id: { type: String, required: true },
    customization_hash: { type: Number, required: true },
    share_code: { type: String, required: true },

    name: { type: String, required: true },
    description: { type: String, required: true },

    clan_logo: { type: Number },
    dash_logo: { type: Number },
    headlight_color: { type: Number },
    mod_armor: {
        types: { type: Number },
        level: { type: Number }
    }
});

export default mongoose.model('customizations', customizationData);