import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//Forms Of Hrms

const leaveForm = React.lazy(() => import('./views/leaveform/leave-form'))
const AddProjectForm = React.lazy(() => import('./views/project/AddProjectForm'))
const AddEventForm = React.lazy(() => import('./views/event/AddEventForm'))
const AddCompanyForm = React.lazy(() => import('./views/company/AddCompanyForm'))
const ViewCompaniesPage = React.lazy(() => import('./views/company/ViewAllCompanies'))
const EventListPage = React.lazy(() => import('./views/event/EventListPage'))
const employeeList = React.lazy(() => import('./views/employee/employee-list'))
const Register = React.lazy(() => import('./views/employee/Register'))
const attendance = React.lazy(() => import('./views/attendance/attendance-form'))
const applyOnDuty = React.lazy(() => import('./views/attendance/OnDuty-form'))
const addDepartment = React.lazy(() => import('./views/Department/Register-dept'))
const leaveApproval = React.lazy(() => import('./views/leaveform/leave-approval-form'))
const leaveTypeForm = React.lazy(() => import(`./views/leaveform/leaveTypeform`))
const onDutyList = React.lazy(() => import('./views/attendance/accept-onduty.list'))
const updateEmployee = React.lazy(() => import('./views/employee/updateEmployee'))
const addHoliday = React.lazy(() => import('./views/holiday/addHolidayForm'))
const getHolidays = React.lazy(() => import('./views/holiday/getAllHolidays'))
const viewEmployee = React.lazy(() => import('./views/employee/viewEmployee'))
const HrDashboard = React.lazy(() => import('./views/dashboard/Dashboard.hr'))
const ManagerDashboard = React.lazy(() => import('./views/dashboard/Dashboard.manager'))
const EmployeeDashboard = React.lazy(() => import('./views/dashboard/Dashboard.emp'))
const Payslip = React.lazy(() => import('./views/Payslip/Payslip'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/employee-dashboard', name: 'Employee Dashboard', element: EmployeeDashboard },
  { path: '/manager-dashboard', name: 'Manager Dashboard', element: ManagerDashboard },
  { path: '/hrdashboard', name: 'HR Dashboard', element: HrDashboard },
  { path: '/onduty/onduty-list', name: 'Onduty Approval', element: onDutyList },
  { path: '/leave/leave-approval', name: 'Leave Approval', element: leaveApproval },
  { path: '/onduty', name: 'Apply On Duty', element: applyOnDuty },
  { path: '/attendance', name: 'Attendance', element: attendance },
  { path: '/employees', name: 'Employee List', element: employeeList },
  { path: '/register', name: 'Add Employee', element: Register },
  { path: '/registerDept', name: 'Add Department', element: addDepartment },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/leave', name: 'leave-form', element: leaveForm },
  { path: '/leave/leaveType', name: 'leave-form', element: leaveTypeForm },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/Add-project', name: 'Project-form', element: AddProjectForm },
  { path: '/Add-event', name: 'Event-form', element: AddEventForm },
  { path: '/All-event', name: 'Event-form', element: EventListPage },
  { path: '/update-employee/:empId', name: 'update-employee', element: updateEmployee },
  { path: '/addHoliday', name: 'Add-Holiday', element: addHoliday },
  { path: '/getHolidays', name: 'Get-Holidays', element: getHolidays },
  { path: '/Add-company', name: 'Company-form', element: AddCompanyForm },
  { path: '/All-companies', name: 'Company-form', element: ViewCompaniesPage },
  { path: '/view-employee', name: 'Get-Holidays', element: viewEmployee },
  { path: '/Payslip', name: 'Payslip', element: Payslip },
]

export default routes
