import BaseModule from './structures/BaseModule.js'
import Modules from '@/src/managers/Modules.js'
import TeleportModel from './structures/models/TeleportModel.js'

export default class Player extends BaseModule {
    constructor(main) 
    {
        super(main);

        this.register(Player, {
            name: 'Player',

            requires: [ 'mongodb', 'Sessions' ]
        });
    }

    getTeleportDataBySession(sessionId, teleport_hash) 
    {
        const session = Modules.Sessions.get(sessionId);
        if (!session) return [];

        return TeleportModel.getAll({ user_id: session.userId, teleport_hash });
    }

    getTeleportDataByShareCode(share_code) 
    {
        return TeleportModel.getOne({ share_code });
    }

    getSavedTeleportData(sessionId, teleport_hash) 
    {
        const session = Modules.Sessions.get(sessionId);
        if (!session) return [];

        const ids = session.user.saved_profiles;

        return TeleportModel.getAll({ _id: { $in: ids }, teleport_hash });
    }

    async saveTeleportData(sessionId, data) 
    {
        const session = Modules.Sessions.get(sessionId);
        if (!session) return undefined;

        let share_code;
        do 
        {
            share_code = createShareCode(session);
        } while (!await TeleportModel.ensureUnique(share_code));

        const teleportData = Object.assign({ user_id: session.userId, share_code }, data);

        return TeleportModel.create(teleportData);
    }

    /**
     *
     * @param {string} sessionId The session id of the user
     * @param {string} share_code Share code to find the id of the teleport profile
     * @returns {boolean} True if the teleport id was added successfully, false otherwise
     */
    async saveProfile(sessionId, share_code) 
    {
        const session = Modules.Sessions.get(sessionId);
        if (!session) return false;

        const { _id, user_id } = await this.getTeleportDataByShareCode(share_code);
        if (!_id || user_id == session.userId) return false;

        const { saved_profiles } = await Modules.Users.appendTeleportProfile({ _id: session.userId }, _id);

        return saved_profiles.includes(_id);
    }

    updateTeleportData(sessionId, data) 
    {
        const session = Modules.Sessions.get(sessionId);
        if (!session) return undefined;

        const { share_code } = data;
        return TeleportModel.update({ share_code, user_id: session.userId }, data);
    }
}
