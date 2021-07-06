import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import InputField from '../../components/InputField/InputField';

const OPTIONS_FOR_DATE = [
    { key: 'In 1 week', value: '1 week' },
    { key: 'In 2 weeks', value: '2 week' },
    { key: 'In 3 weeks', value: '3 week' },
    { key: 'More than 3 weeks   ', value: '3+ weeks' }
]

const OPTIONS_FOR_CAREER = [
    { key: 'Entry Level', value: 'Entry Level' },
    { key: 'Beginner', value: 'Beginner' },
    { key: 'Intermediate', value: 'Intermediate' },
    { key: 'Expert', value: 'Expert' }
]

const OPTIONS_FOR_GENDER = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Other', value: 'Other' }
]

export default function candidateType({ candidateType, setCandidateType, errors }) {

    const handleInput = (e) => {
        setCandidateType((prev) => { return ({ ...prev, [e.target.name]: e.target.value }) })
    }

    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <InputField
                    id='hourRate'
                    type='number'
                    name='hourRate'
                    value={candidateType.hourRate}
                    onChange={handleInput}
                    label='Hourly rate'
                    placeholder='Enter Value...'
                    error={errors['hourRate']}
                />
            </div>
            <div className='col-6'>
                <Dropdown
                    id='startDate'
                    name='startDate'
                    value={candidateType.startDate}
                    onChange={handleInput}
                    label='Expected start date'
                    placeholder='Select date'
                    options={OPTIONS_FOR_DATE}
                />
            </div>
            <div className='col-6 mt-5'>
                <Dropdown
                    id='career'
                    name='career'
                    value={candidateType.career}
                    onChange={handleInput}
                    label='Career level'
                    placeholder='Enter Value...'
                    options={OPTIONS_FOR_CAREER}
                />
            </div>
            <div className='col-6 mt-5'>
                <Dropdown
                    id='gender'
                    name='gender'
                    value={candidateType.gender}
                    onChange={handleInput}
                    label='Gender'
                    placeholder='Enter Value...'
                    options={OPTIONS_FOR_GENDER}
                />
            </div>
            <div className='col-12 mt-5'>
                <InputField
                    id='equipment'
                    type='text'
                    name='equipment'
                    value={candidateType.equipment}
                    onChange={handleInput}
                    multiline={true}
                    label='Equipment specification'
                    placeholder='Write a description'
                />
            </div>
        </div>
    )
}
