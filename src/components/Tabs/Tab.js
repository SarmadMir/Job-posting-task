import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        children: PropTypes.number.isRequired,
        index: PropTypes.number
    }

    render() {
        const { activeTab, label, children, index } = this.props;

        let className = 'tab-list-item';
        if (activeTab >= index) {
            className += ' tab-list-active';
        }
        if (activeTab === index && activeTab !== children - 1) {
            className += ' active-border';
        }
        return (
            <>
                <li className={className} style={{ width: `calc(100% / ${children})` }} >
                    {label}
                </li>
                {index !== children - 1 && < span style={{ height: '100%', borderRight: '1px solid lightgray', mixBlendMode: 'multiply' }}></span>}
            </>
        );
    }
}
