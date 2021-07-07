import React, { useEffect, useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide';
import moment from 'moment'
import Button from '../../components/Button/Button'
import { IoIosCloseCircle } from 'react-icons/io'
import { DialogActions, DialogTitle, DialogContent } from '@material-ui/core';
import { colors } from '../../constants/theme';
import Tabs from '../../components/Tabs/Tabs';
import JobInformation from './jobInformation';
import CandidateType from './candidateType';
import ShiftTimings from './shiftTimings';
import { connect } from 'react-redux';
import { generateNotification } from '../../actions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function CreateJob(props) {
    const { open, mode, onClose, jobData, setJobData, selectedJob } = props
    const [step, setStep] = useState(0)
    const [errors, setErrors] = useState({})
    const [jobInfo, setJobInfo] = useState({
        title: '',
        experience: '',
        education: '',
        skills: '',
        description: '',
        template: ''
    })
    const [candidateType, setCandidateType] = useState({
        hourRate: '',
        startDate: '',
        career: '',
        gender: '',
        equipment: ''
    })
    const [daysList, setDaysList] = useState([
        { name: 'Sunday', from: null, to: null, selected: false },
        { name: 'Monday', from: null, to: null, selected: false },
        { name: 'Tuesday', from: null, to: null, selected: false },
        { name: 'Wednesday', from: null, to: null, selected: false },
        { name: 'Thursday', from: null, to: null, selected: false },
        { name: 'Friday', from: null, to: null, selected: false },
        { name: 'Saturday', from: null, to: null, selected: false }
    ])

    useEffect(() => {
        if (mode === 'Update') {
            Object.entries(selectedJob).forEach(([key, val]) => {
                if (jobInfo.hasOwnProperty(key)) {
                    setJobInfo(prev =>
                        prev.hasOwnProperty(key) &&
                        {
                            ...prev,
                            [key]: val
                        }
                    )
                }
                if (candidateType.hasOwnProperty(key)) {
                    setCandidateType(prev =>
                        prev.hasOwnProperty(key) &&
                        {
                            ...prev,
                            [key]: val
                        }
                    )
                }
            })
            if (selectedJob.shiftTimings) {
                setDaysList(selectedJob.shiftTimings)
            }
        }
        //eslint-disable-next-line
    }, [mode, selectedJob])

    const CleanUp = () => {
        setStep(0)
        setErrors({})
        setJobInfo({
            title: '',
            experience: '',
            education: '',
            skills: '',
            description: '',
            template: ''
        })
        setCandidateType({
            hourRate: '',
            startDate: '',
            career: '',
            gender: '',
            equipment: ''
        })
        setDaysList([
            { name: 'Sunday', from: null, to: null, selected: false },
            { name: 'Monday', from: null, to: null, selected: false },
            { name: 'Tuesday', from: null, to: null, selected: false },
            { name: 'Wednesday', from: null, to: null, selected: false },
            { name: 'Thursday', from: null, to: null, selected: false },
            { name: 'Friday', from: null, to: null, selected: false },
            { name: 'Saturday', from: null, to: null, selected: false }
        ])
    }

    function validateJobInfo() {
        let fields = jobInfo;
        let errors = {};
        let validated = true;

        if (!fields["title"]) {
            validated = false;
            errors["title"] = "Job title is required.";
        }
        if (!fields["experience"] || fields["experience"] === " ") {
            validated = false;
            errors["experience"] = "Experience is required.";
        }
        if (!fields["template"]) {
            validated = false;
            errors["template"] = "*Image is required.";
        }
        setErrors(errors);
        return validated;
    }

    function validateCandidateType() {
        let fields = candidateType;
        let errors = {};
        let validated = true;

        if (!fields["hourRate"]) {
            validated = false;
            errors["hourRate"] = "Hourly Rate is required.";
        }
        if (fields["hourRate"] && fields["hourRate"] < 10) {
            validated = false;
            errors["hourRate"] = "Hourly rate cannot be less than 10.";
        }
        setErrors(errors);
        return validated;
    }

    function validateShiftTime() {
        let validated = true;
        let errors = {};
        let daysSelected = 0;

        daysList.forEach((d) => {
            if (d.selected) {
                daysSelected++
                const start = moment(d.from)
                const end = moment(d.to)
                const difference = moment(end.diff(start)).utcOffset(0).format('HH:mm:ss')
                const duration = moment.duration(difference)
                if (duration.hours() === 0) {
                    validated = false;
                    errors[d.name] = "*Please select both the start and end time.";
                }
                if (duration.hours() < 9) {
                    validated = false;
                    errors[d.name] = "*Shift Time should not be less than 9 hours.";
                }
            }
        })
        if (daysSelected < 2) {
            validated = false;
            errors["shiftTime"] = "*Please select atleast 2 days.";
        }
        setErrors(errors)
        return validated;
    }

    const handleNextClick = () => {
        if ((step === 0 && validateJobInfo()) ||
            (step === 1 && validateCandidateType())) {
            setStep(prev => prev + 1)
        }
    }

    const handlePreviousClick = () => {
        setStep(prev => prev - 1)
    }

    const handleClose = () => {
        CleanUp()
        onClose()
    }

    const handleCreatePost = () => {
        if (step === 2 && validateShiftTime()) {
            setJobData(prev => [...prev, { ...jobInfo, ...candidateType, shiftTimings: daysList }])
            props.generateNotification({ title: jobInfo.title, message: 'New Job Posted.' })
            handleClose()
        }
    }

    const handleEditPost = () => {
        if (step === 2 && validateShiftTime()) {
            let editedJob = jobData.map(data => (
                data.title === selectedJob.title ? { ...jobInfo, ...candidateType, shiftTimings: daysList } : data
            ))
            setJobData(editedJob);
            handleClose()
        }
    }

    const handleSelectDay = (e) => {
        let tempList = daysList.map((day) => {
            if (day.name === e.name) {
                return {
                    ...day, selected: !day.selected
                }
            } else return day
        })
        setDaysList(tempList)
    }

    const handleSelectTime = (e, range, day) => {
        let tempList = daysList.map((item) => {
            if (item.name === day.name) {
                return {
                    ...item, [range]: e
                }
            } else return item
        })
        setDaysList(tempList)
    }

    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition} PaperProps={{ style: { borderRadius: 20 } }}>
            <DialogTitle>
                <div className='row'>
                    <div className='col-8'>
                        <h2 style={{ textTransform: 'uppercase', color: colors.PRIMARY }}>{mode} a Job Post</h2>
                        <span style={{ fontSize: 16 }}>Complete the following steps to create an effective job post</span>
                    </div>
                    <div className='col-4 d-flex justify-content-end align-items-center'>
                        <IoIosCloseCircle title='Close Wizard' size={50} color='#8C8C8C' cursor='pointer' onClick={() => handleClose()}
                        />
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
                                {<JobInformation jobInfo={jobInfo} setJobInfo={setJobInfo} errors={errors} />}
                            </div>
                            <div label='Candidate Type' step={1}>
                                {<CandidateType candidateType={candidateType} setCandidateType={setCandidateType} errors={errors} />}
                            </div>
                            <div label='Shift Timings' step={2}>
                                {<ShiftTimings daysList={daysList} handleSelectDay={handleSelectDay} handleSelectTime={handleSelectTime}
                                    errors={errors}
                                />}
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
                    <Button label='next' onClick={step === 2 ? mode === "Create" ? handleCreatePost : handleEditPost : handleNextClick} />
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default connect(null, { generateNotification })(CreateJob)