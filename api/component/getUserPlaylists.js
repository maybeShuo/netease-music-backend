'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserPlaylists = undefined;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('../config');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserPlaylists = function getUserPlaylists(uid, callback) {
  var option = (0, _util.deepCopy)(_config.globalOption);
  var url = _config.origin + '/api/user/playlist/?uid=' + uid + '&limit=1000&offset=0';
  var method = 'get';
  Object.assign(option, { url: url, method: method });
  (0, _request2.default)(option, function (err, res, body) {
    if (!err && res.statusCode == 200) {
      var info = JSON.parse(body);
      callback && callback(JSON.stringify(info, '', 2));
    } else {
      console.error(err);
    }
  });
};
exports.getUserPlaylists = getUserPlaylists;