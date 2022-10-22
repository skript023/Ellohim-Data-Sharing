import mongoose from 'mongoose'

const teleportData = new mongoose.Schema({
    user_id: { type: String, required: true },
    handling_hash: { type: Number, required: true },
    share_code: { type: String, required: true },

    name: { type: String, required: true },
    description: { type: String, required: true },

    data: {
        name: {
            model_hash: { type: Number, required: true },
            position_x: { type: Number, required: true },
            position_y: { type: Number, required: true },
            position_z: { type: Number, required: true },
            rotation_x: { type: Number, required: true },
            rotation_y: { type: Number, required: true },
            rotation_z: { type: Number, required: true }
        }
    }
});

export default mongoose.model('teleport_data', teleportData);
