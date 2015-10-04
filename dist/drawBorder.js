'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var drawBorder = undefined,
    drawBorderBottom = undefined,
    drawBorderJoin = undefined,
    drawBorderTop = undefined;

/**
 * @typedef drawBorder~parts
 * @property {String} left
 * @property {String} right
 * @property {String} body
 * @property {String} join
 */

/**
 * @param {number[]} columnSizeIndex
 * @param {drawBorder~parts} parts
 * @return {string}
 */
exports.drawBorder = drawBorder = function (columnSizeIndex, parts) {
    var columns = undefined;

    columns = _lodash2['default'].map(columnSizeIndex, function (size) {
        return _lodash2['default'].repeat(parts.body, size);
    });

    columns = columns.join(parts.join);

    return '' + parts.left + columns + parts.right + '\n';
};

/**
 * @typedef drawBorderTop~parts
 * @property {string} topLeft
 * @property {string} topRight
 * @property {string} topBody
 * @property {string} topJoin
 */

/**
 * @param {number[]} columnSizeIndex
 * @param {drawBorderTop~parts} parts
 * @return {string}
 */
exports.drawBorderTop = drawBorderTop = function (columnSizeIndex, parts) {
    return drawBorder(columnSizeIndex, {
        left: parts.topLeft,
        right: parts.topRight,
        body: parts.topBody,
        join: parts.topJoin
    });
};

/**
 * @typedef drawBorderJoin~parts
 * @property {string} joinLeft
 * @property {string} joinRight
 * @property {string} joinBody
 * @property {string} joinJoin
 */

/**
 * @param {number[]} columnSizeIndex
 * @param {drawBorderJoin~parts} parts
 * @return {string}
 */
exports.drawBorderJoin = drawBorderJoin = function (columnSizeIndex, parts) {
    return drawBorder(columnSizeIndex, {
        left: parts.joinLeft,
        right: parts.joinRight,
        body: parts.joinBody,
        join: parts.joinJoin
    });
};

/**
 * @typedef drawBorderBottom~parts
 * @property {string} topLeft
 * @property {string} topRight
 * @property {string} topBody
 * @property {string} topJoin
 */

/**
 * @param {number[]} columnSizeIndex
 * @param {drawBorderBottom~parts} parts
 * @return {string}
 */
exports.drawBorderBottom = drawBorderBottom = function (columnSizeIndex, parts) {
    return drawBorder(columnSizeIndex, {
        left: parts.bottomLeft,
        right: parts.bottomRight,
        body: parts.bottomBody,
        join: parts.bottomJoin
    });
};

exports.drawBorder = drawBorder;
exports.drawBorderTop = drawBorderTop;
exports.drawBorderJoin = drawBorderJoin;
exports.drawBorderBottom = drawBorderBottom;
//# sourceMappingURL=drawBorder.js.map
