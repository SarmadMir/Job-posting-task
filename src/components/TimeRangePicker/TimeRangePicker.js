import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { styles, useStylesForPicker } from "../../styling/components/timePickerStyle"
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import PropTypes from 'prop-types'
import { colors } from '../../constants/theme';

function TimeRangePicker({
    day,
    disabled,
    selectTime,
    error
}) {
    const classes = useStylesForPicker()

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div style={styles.container}>
                <div style={!disabled ?
                    {
                        ...styles.day, backgroundColor: colors.MUTED,
                        color: colors.MUTED_TEXT,
                    } : styles.day}
                >
                    {day.name}
                </div>
                <div style={styles.time}>
                    <TimePicker
                        autoOk
                        placeholder='  -- : -- --'
                        disabled={!disabled}
                        value={day.from}
                        onChange={(e) => selectTime(e, 'from', day)}
                        InputProps={{
                            disableUnderline: true,
                            className: classes.input
                        }}
                    />
                    <span style={{ padding: 2, color: colors.MUTED_TEXT, paddingRight: 8 }}>to</span>
                    <TimePicker
                        autoOk
                        placeholder=' -- : -- --'
                        disabled={!disabled}
                        value={day.to}
                        onChange={(e) => selectTime(e, 'to', day)}
                        InputProps={{
                            disableUnderline: true,
                            className: classes.input
                        }}
                    />
                </div>
            </div>
            <span style={{ color: 'red' }}>{error}</span>
        </MuiPickersUtilsProvider >
    );
}

TimeRangePicker.propTypes = {
    disabled: PropTypes.bool,
    day: PropTypes.object.isRequired,
    selectTime: PropTypes.func.isRequired
}

export default TimeRangePicker;