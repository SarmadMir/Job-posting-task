import React, { useState, useEffect } from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FaEye, FaPen, FaTrashAlt } from 'react-icons/fa'
import { colors } from '../../constants/theme'
import InputField from '../../components/InputField/InputField'
import Button from '../../components/Button/Button'
import CreateJob from './createJob'

const StyledTableCell = withStyles((theme) => ({
   head: {
      backgroundColor: theme.palette.action.disabledBackground,
      color: colors.PRIMARY_LIGHT,
      fontWeight: '600',
      letterSpacing: 0.5
   },
   body: {
      fontSize: 14
   }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
   root: {
      '&:nth-of-type(odd)': {
         backgroundColor: theme.palette.action.hover
      }
   }
}))(TableRow);

const useStyles = makeStyles({
   table: {
      minWidth: 700
   }
});

export default function Index() {
   const classes = useStyles();

   const [filteredJob, setfilteredJob] = useState([])
   const [searchJob, setSearchJob] = useState("")
   const [openJobWizard, setOpenJobWizard] = useState(false)
   const [mode, setMode] = useState('')
   const [jobData, setJobData] = useState([
      { id: 1, title: 'MERN', experience: '1 year', career: 'Intermediate' },
      { id: 2, title: 'MEAN', experience: '6 months', career: 'Beginner' }
   ])

   useEffect(() => {
      if (searchJob !== '') {
         const newFilteredJob = jobData.filter(job => job.title.toLowerCase().includes(searchJob.toLowerCase()))
         setfilteredJob(newFilteredJob)
      } else {
         setfilteredJob(jobData)
      }
      // eslint-disable-next-line
   }, [searchJob])

   const handlePostJobClick = () => {
      setOpenJobWizard(true)
      setMode('add')
   }

   const handleCloseWizard = () => {
      setOpenJobWizard(false)
      setMode('')
   }

   const handleViewJob = () => {
      console.log("View job clicked")
   }

   const handleEditJob = () => {
      console.log("Edit job clicked")
   }

   const handleDeleteJob = () => {
      console.log("Delete job clicked")
   }

   return (
      <div className='container-fluid'>
         <div className='row mt-3 pl-2'>
            <div className='col-6 d-flex align-items-center pl-4'>
               <h2 style={{ color: colors.PRIMARY }}>List of Jobs</h2>
            </div>
            <div className='col-6 d-flex justify-content-end pr-4'>
               <div className='pr-2'>
                  <InputField
                     id={'Search job'}
                     placeholder='Enter job title...'
                     type='text'
                     label={'Search by job title'}
                     name='Search Job'
                     variant='search'
                     disableUnderline={true}
                     value={searchJob}
                     onChange={(e) => setSearchJob(e.target.value)}
                  />
               </div>
               <Button
                  label='Post Job'
                  onClick={handlePostJobClick}
               />
            </div>
         </div>
         <div className='row mt-4'>
            <div className='col-12 mt-4 pr-4 pl-4'>
               <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                     <TableHead>
                        <TableRow>
                           <StyledTableCell>Sr No.</StyledTableCell>
                           <StyledTableCell>Job Title</StyledTableCell>
                           <StyledTableCell>Experience</StyledTableCell>
                           <StyledTableCell>Career Level</StyledTableCell>
                           <StyledTableCell align="center">Actions</StyledTableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {filteredJob.map((job) => (
                           <StyledTableRow key={job.id}>
                              <StyledTableCell component="th" scope="row">
                                 {job.id}
                              </StyledTableCell>
                              <StyledTableCell>{job.title}</StyledTableCell>
                              <StyledTableCell>{job.experience}</StyledTableCell>
                              <StyledTableCell>{job.career}</StyledTableCell>
                              <StyledTableCell align="center" width='150'>
                                 <FaEye title='View job details' size={22} color={colors.PRIMARY} onClick={() => handleViewJob(job)} cursor='pointer' />
                                 <FaPen title='Edit job details' size={20} color={colors.SECONDARY} onClick={() => handleEditJob(job)} cursor='pointer' className='ml-3 mr-3' />
                                 <FaTrashAlt title='Delete job' size={20} color='#e64e4e' onClick={() => handleDeleteJob(job)} cursor='pointer' />
                              </StyledTableCell>
                           </StyledTableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </div>
         </div>
         <CreateJob open={openJobWizard} mode={mode} onClose={handleCloseWizard} />
      </div>
   )
}