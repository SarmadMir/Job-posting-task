import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button'

const OPTIONS_FOR_EXPERIENCE = [
    { key: 'Less than 1 Year', value: '<1 Year' },
    { key: '1-2 Years', value: '1-2 Years' },
    { key: '2-3 Years', value: '2-3 Years' },
    { key: '3+ Years', value: '3+ Years' }
]

const OPTIONS_FOR_EDUCATION = [
    { key: 'Phd', value: 'Phd' },
    { key: 'Masters', value: 'Masters' },
    { key: 'Bachelors', value: 'Bachelors' },
    { key: 'HSSC', value: 'HSSC' },
    { key: 'SSC', value: 'SSC' }
]

const OPTIONS_FOR_SKILLS = [
    { key: 'Technical', value: 'Technical' },
    { key: 'Managerial', value: 'Managerial' }
]

export default function jobInformation({ jobInfo, setJobInfo, errors }) {

    const handleInput = (e) => {
        setJobInfo((prev) => { return ({ ...prev, [e.target.name]: e.target.value }) })
    }

    const handleTemplateSelect = (e) => {
        setJobInfo((prev) => { return ({ ...prev, 'template': e.target.files[0].name }) })
    }

    return (
        <div className='row mt-5'>
            <div className='col-sm-6 col-md-4'>
                <InputField
                    id='title'
                    type='text'
                    name='title'
                    value={jobInfo.title}
                    onChange={handleInput}
                    label='Looking For'
                    placeholder='Enter Value...'
                    error={errors['title']}
                />
            </div>
            <div className='col-sm-6 col-md-4'>
                <Dropdown
                    id='experience'
                    name='experience'
                    value={jobInfo.experience}
                    onChange={handleInput}
                    label='Experience'
                    placeholder='Enter Value...'
                    options={OPTIONS_FOR_EXPERIENCE}
                    error={errors['experience']}
                />
            </div>
            <div className='col-sm-6 col-md-4 mt-sm-5 mt-md-0'>
                <Dropdown
                    id='education'
                    name='education'
                    value={jobInfo.education}
                    onChange={handleInput}
                    label='Education'
                    placeholder='Enter Value...'
                    options={OPTIONS_FOR_EDUCATION}
                />
            </div>
            <div className='col-12 mt-5'>
                <Dropdown
                    id='skills'
                    name='skills'
                    value={jobInfo.skills}
                    onChange={handleInput}
                    label='Skills'
                    placeholder='Enter Value...'
                    options={OPTIONS_FOR_SKILLS}
                />
            </div>
            <div className='col-12 mt-5'>
                <InputField
                    id='description'
                    name='description'
                    value={jobInfo.description}
                    onChange={handleInput}
                    multiline={true}
                    label='Description'
                    placeholder='Write a description'
                />
            </div>
            <div className='col-12 mt-2'>
                <span style={{ fontSize: 12, color: '#8C8C8C' }}>Add If there is any inspiration</span>
                <div className='mt-2'>
                    <Button
                        type="file"
                        icon={true}
                        variant='secondary'
                        label='go to select template'
                        onClick={handleTemplateSelect}
                    />
                    <span style={{ color: 'red', padding: '0px 10px' }}>{errors['template'] && errors['template']}</span>
                </div>
            </div>
        </div>
    )
}
