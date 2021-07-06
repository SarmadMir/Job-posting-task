import React from 'react'
import TimeRangePicker from '../../components/TimeRangePicker/TimeRangePicker';
import { styles } from './styles';
import { colors } from '../../constants/theme';

export default function shiftTimings({
    daysList,
    handleSelectDay,
    handleSelectTime,
    errors
}) {
    return (
        <div className='row'>
            <div className='col mt-4 d-flex'>
                <h4 style={{ fontWeight: '400' }}>Schedule working days & timings</h4>
                <span className='ml-4' style={{ color: 'red' }}>
                    {errors && errors['shiftTime']}
                </span>
            </div>
            <hr style={{ width: '100%' }} />
            {daysList.map((day, i) =>
                <div key={i} className='col-1 mt-4 mb-4' >
                    <span
                        title='Select a day'
                        className='d-flex align-items-center'
                        style={!day.selected ? styles.dayButton : {
                            ...styles.dayButton, backgroundColor: colors.PRIMARY,
                            color: 'white',
                        }}
                        onClick={() => handleSelectDay(day)}
                    >
                        {day.name.charAt(0)}
                    </span>
                </div>
            )}
            {daysList.map((day, i) =>
                <div key={i} className='col-6 mt-4'>
                    <TimeRangePicker
                        day={day}
                        disabled={day.selected}
                        selectTime={handleSelectTime}
                        error={errors[day.name]}
                    />
                </div>
            )}
        </div>
    )
}
