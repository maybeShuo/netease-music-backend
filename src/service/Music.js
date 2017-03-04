"use strict";

var api = require('../../api/app.js').api

const MusicService = {
    "/api/user/playlist": {
        GET: (req, res) => {
            const uid = req.query.uid;
            api.getUserPlaylists(uid, data => {
                res.send(data);
            });
        }
    },

    "/api/playlist/detail": {
        GET: (req, res) => {
            const id = req.query.id;
            api.getPlaylists(id, data => {
                res.send(data);
            });
        }
    },

    "/api/song/detail": {
        GET: (req, res) => {
            const ids = req.query.ids;
            api.song(ids, data => {
                res.send(data);
            });
        }
    }
}

module.exports = MusicService;
