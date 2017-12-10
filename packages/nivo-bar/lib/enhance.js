'use strict';

exports.__esModule = true;

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _defaultProps = require('recompose/defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _withPropsOnChange = require('recompose/withPropsOnChange');

var _withPropsOnChange2 = _interopRequireDefault(_withPropsOnChange);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _index = require('@nivo-td/packages/nivo-core/lib/index');

var _props = require('./props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *d
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
exports.default = function (Component) {
    return (0, _compose2.default)((0, _defaultProps2.default)(_props.BarDefaultProps), (0, _index.withTheme)(), (0, _index.withColors)(), (0, _index.withDimensions)(), (0, _index.withMotion)(), (0, _withPropsOnChange2.default)(['indexBy'], function (_ref) {
        var indexBy = _ref.indexBy;
        return {
            getIndex: (0, _index.getAccessorFor)(indexBy)
        };
    }), (0, _withPropsOnChange2.default)(['labelTextColor'], function (_ref2) {
        var labelTextColor = _ref2.labelTextColor;
        return {
            getLabelTextColor: (0, _index.getInheritedColorGenerator)(labelTextColor, 'axis.textColor')
        };
    }), (0, _withPropsOnChange2.default)(['labelLinkColor'], function (_ref3) {
        var labelLinkColor = _ref3.labelLinkColor;
        return {
            getLabelLinkColor: (0, _index.getInheritedColorGenerator)(labelLinkColor, 'axis.tickColor')
        };
    }), (0, _withPropsOnChange2.default)(['label', 'labelFormat'], function (_ref4) {
        var label = _ref4.label,
            labelFormat = _ref4.labelFormat;
        return {
            getLabel: (0, _index.getLabelGenerator)(label, labelFormat)
        };
    }), (0, _withPropsOnChange2.default)(['borderColor'], function (_ref5) {
        var borderColor = _ref5.borderColor;
        return {
            getBorderColor: (0, _index.getInheritedColorGenerator)(borderColor)
        };
    }), _pure2.default)(Component);
};