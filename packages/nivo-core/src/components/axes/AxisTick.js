/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AxisTick extends Component {
    static propTypes = {
        format: PropTypes.func,
        theme: PropTypes.object.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        opacity: PropTypes.number.isRequired,
        rotate: PropTypes.number.isRequired,
    }

    static defaultProps = {
        opacity: 1,
        rotate: 0,
    }

    render() {
        const {
            value: _value,
            x,
            y,
            opacity,
            rotate,
            format,
            axisFormat,
            lineX,
            lineY,
            onClick,
            textX,
            textY,
            textBaseline,
            textAnchor,
            theme,
        } = this.props

        let value = _value
        if (format !== undefined) {
          value = format(value, axisFormat)
        }

        let gStyle = { opacity }
        if (onClick) {
            gStyle['cursor'] = 'pointer'
        }

        return (
            <g
                transform={`translate(${x},${y})`}
                {...(onClick ? { onClick: e => onClick(e, value) } : {})}
                style={gStyle}
            >
                <line x1={0} x2={lineX} y1={0} y2={lineY} stroke={theme.axis.tickColor} />
                <text
                    alignmentBaseline={textBaseline}
                    textAnchor={textAnchor}
                    transform={`translate(${textX},${textY}) rotate(${rotate})`}
                    style={{
                        fill: theme.axis.textColor,
                        fontSize: theme.axis.fontSize,
                    }}
                >
                    {value}
                </text>
            </g>
        )
    }
}
