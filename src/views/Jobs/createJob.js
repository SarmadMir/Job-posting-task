import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide';
import Button from '../../components/Button/Button'
import { IoIosCloseCircle } from 'react-icons/io'
import { DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { colors } from '../../constants/theme';
import Tabs from '../../components/Tabs/Tabs';
import InputField from '../../components/InputField/InputField';
import { render } from '@testing-library/react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateJob({ open, mode, onClose }) {
    const [step, setStep] = useState(0)

    const handleNextClick = () => {
        setStep(prev => prev + 1)
    }

    const handlePreviousClick = () => {
        setStep(prev => prev - 1)
    }

    const handleCreatePost = () => {
        console.log("Job Post Clicked")
    }

    const renderJobInformationSection = () => {
        return (
            <div className='row mt-5'>
                <div className='col-sm-6 col-md-4'>
                    <InputField
                        label='Looking For'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-sm-6 col-md-4'>
                    <InputField
                        label='Experience'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-sm-6 col-md-4 mt-sm-5 mt-md-0'>
                    <InputField
                        label='Education'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-12 mt-5'>
                    <InputField
                        label='Skills'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-12 mt-5'>
                    <InputField
                        multiline={true}
                        label='Description'
                        placeholder='Write a description'
                    />
                </div>
                <div className='col-12 mt-2'>
                    <span style={{ fontSize: 12, color: '#8C8C8C' }}>Add If there is any inspiration</span>
                    <div className='mt-2'><Button icon={true} variant='secondary' label='go to select template' /></div>
                </div>
            </div>
        )
    }

    const renderCandidateTypeSection = () => {
        return (
            <div className='row mt-5'>
                <div className='col-6'>
                    <InputField
                        label='Hourly rate'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-6'>
                    <InputField
                        label='Expected start date'
                        placeholder='Select date'
                    />
                </div>
                <div className='col-6 mt-5'>
                    <InputField
                        label='Career level'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-6 mt-5'>
                    <InputField
                        label='Gender'
                        placeholder='Enter Value...'
                    />
                </div>
                <div className='col-12 mt-5'>
                    <InputField
                        multiline={true}
                        label='Equipment specification'
                        placeholder='Write a description'
                    />
                </div>
            </div>
        )
    }

    const renderShiftTimingsSection = () => {
        return (
            <div className='row'>
                <div className='col mt-4'>
                    <h4 style={{ fontWeight: '400' }}>Schedule working days & timings</h4>
                </div>
                <hr style={{ width: '100%' }} />
            </div>
        )
    }

    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition} PaperProps={{ style: { borderRadius: 20 } }}>
            <DialogTitle>
                <div className='row'>
                    <div className='col-8'>
                        <h2 style={{ textTransform: 'uppercase', color: colors.PRIMARY }}>Create a Job Post</h2>
                        <span style={{ fontSize: 16 }}>Complete the following steps to create an effective job post</span>
                    </div>
                    <div className='col-4 d-flex justify-content-end align-items-center'>
                        <IoIosCloseCircle title='Close Wizard' size={50} color='#8C8C8C' cursor='pointer' onClick={() => onClose()} />
                    </div>
                </div>
            </DialogTitle>
            <hr style={{ width: '100%' }} />
            <DialogContent>
                <div className='row'>
                    <div className='col-12'>
                        <span style={{ color: colors.PRIMARY_LIGHT }}>Step {step + 1} of 3</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 mt-3'>
                        <Tabs activeTab={step}>
                            <div label='Job Information' step={0}>
                                {renderJobInformationSection()}
                            </div>
                            <div label='Candidate Type' step={1}>
                                {renderCandidateTypeSection()}
                            </div>
                            <div label='Shift Timings' step={2}>
                                {renderShiftTimingsSection()}
                            </div>
                        </Tabs>
                    </div>
                </div>
            </DialogContent>
            <DialogActions className='mb-2'>
                <div className='col-6'>
                    <Button
                        disabled={step === 0}
                        label='previous'
                        variant='transparent'
                        onClick={handlePreviousClick}
                    />
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <Button label='next' onClick={step === 2 ? handleCreatePost : handleNextClick} />
                </div>
            </DialogActions>
        </Dialog>
    )
}
