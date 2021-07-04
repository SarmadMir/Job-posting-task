import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import './styles.css'

export default class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
        activeTab: PropTypes.number.isRequired
    }

    render() {
        const { children, activeTab } = this.props;

        return (
            <div>
                <ol className="tab-list">
                    {children.map((child, i) => {
                        const { label } = child.props;
                        return (
                            <Tab
                                index={i}
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                children={children.length}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.step !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        )
    }
}
