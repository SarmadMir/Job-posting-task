import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FaBell } from 'react-icons/fa'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { readNotifications } from '../../actions'
import { colors } from '../../constants/theme';
import { styles } from '../../styling/components/notifications'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    componentWillMount() {
        this.props.readNotifications();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newNotification) {
            this.props.notifications.unshift(nextProps.newNotification);
        }
    }

    _renderContainer(notify, i) {
        return (
            <div key={i} className='row p-2'>
                <div className='col-2 pt-1'>
                    <Avatar>{i + 1}</Avatar>
                </div>
                <div className='col-10 pl-4'>
                    <h6 style={{ color: colors.MUTED_TEXT }}><b>{notify.title}</b></h6>
                    {notify.message}
                </div>
                <hr className='col-9 mb-0' />
            </div>
        )
    }

    render() {
        return (
            <div>
                <span style={styles.counter}>{this.props.notifications.length}</span>
                <FaBell size='35' color={colors.SECONDARY} cursor='pointer' title='Notifications' onClick={() => this.setState(prev => ({ open: !prev.open }))} />
                {this.state.open &&
                    <div style={styles.container}>
                        {this.props.notifications.length > 0 ?
                            this.props.notifications.map((notify, i) => this._renderContainer(notify, i))
                            :
                            <>
                                <span className='d-flex justify-content-center pt-3'>No Notifications!</span><hr />
                            </>
                        }

                    </div>
                }
            </div>
        )
    }
}

Notification.propTypes = {
    readNotifications: PropTypes.func.isRequired,
    notifications: PropTypes.array.isRequired,
    newNotification: PropTypes.object
};

const mapStateToProps = (state) => ({
    notifications: state.notify.notifications,
    newNotification: state.notify.notification
})

export default connect(mapStateToProps, { readNotifications })(Notification)