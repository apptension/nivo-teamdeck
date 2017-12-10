var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react';
import { ResponsiveWrapper } from '@nivo-td/packages/nivo-core';
import BarCanvas from './BarCanvas';

export default (function (props) {
    return React.createElement(
        ResponsiveWrapper,
        null,
        function (_ref) {
            var width = _ref.width,
                height = _ref.height;
            return React.createElement(BarCanvas, _extends({ width: width, height: height }, props));
        }
    );
});