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
const allEvents = React.lazy(() => import('./views/event/AllEvents'))
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
  {
    path: '/employee-dashboard',
    name: 'Employee Dashboard',
    element: EmployeeDashboard,
    allowedRoles: ['employee'],
  },
  {
    path: '/manager-dashboard',
    name: 'Manager Dashboard',
    element: ManagerDashboard,
    allowedRoles: ['manager'],
  },
  { path: '/hrdashboard', name: 'HR Dashboard', element: HrDashboard, allowedRoles: ['hr'] },
  {
    path: '/onduty/onduty-list',
    name: 'Onduty Approval',
    element: onDutyList,
    allowedRoles: ['employee', 'manager', 'hr'],
  },
  {
    path: '/leave/leave-approval',
    name: 'Leave Approval',
    element: leaveApproval,
    allowedRoles: ['manager', 'hr', 'teamlead'],
  },
  {
    path: '/onduty',
    name: 'Apply On Duty',
    element: applyOnDuty,
    allowedRoles: ['employee', 'manager', 'hr'],
  },
  {
    path: '/attendance',
    name: 'Attendance',
    element: attendance,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  {
    path: '/employees',
    name: 'Employee List',
    element: employeeList,
    allowedRoles: ['manager', 'hr'],
  },
  {
    path: '/register',
    name: 'Add Employee',
    element: Register,
    allowedRoles: ['manager', 'hr', 'admin'],
  },
  {
    path: '/registerDept',
    name: 'Add Department',
    element: addDepartment,
    allowedRoles: ['hr', 'admin'],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  {
    path: '/leave',
    name: 'leave-form',
    element: leaveForm,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  {
    path: '/leave/leaveType',
    name: 'leave-form',
    element: leaveTypeForm,
    allowedRoles: ['hr'],
  },
  {
    path: '/Add-project',
    name: 'Project-form',
    element: AddProjectForm,
    allowedRoles: ['manager'],
  },
  {
    path: '/Add-event',
    name: 'Event-form',
    element: AddEventForm,
    allowedRoles: ['hr'],
  },
  {
    path: '/All-event',
    name: 'Event-form',
    element: EventListPage,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  {
    path: '/update-employee/:empId',
    name: 'update-employee',
    element: updateEmployee,
    allowedRoles: ['manager', 'hr', 'employee'],
  },
  {
    path: '/addHoliday',
    name: 'Add-Holiday',
    element: addHoliday,
    allowedRoles: ['hr'],
  },
  {
    path: '/getHolidays',
    name: 'Get-Holidays',
    element: getHolidays,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  {
    path: '/Add-company',
    name: 'Company-form',
    element: AddCompanyForm,
    allowedRoles: ['manager', 'hr', 'admin'],
  },
  {
    path: '/All-companies',
    name: 'Company-form',
    element: ViewCompaniesPage,
    allowedRoles: ['manager', 'hr', 'teamlead', 'admin'],
  },
  {
    path: '/view-employee/:empId',
    name: 'view-employee',
    element: viewEmployee,
    allowedRoles: ['manager', 'hr', 'admin'],
  },
  {
    path: '/Payslip',
    name: 'Payslip',
    element: Payslip,
    allowedRoles: ['manager', 'hr', 'admin', 'employee', 'teamlead'],
  },
  {
    path: '/delete-event',
    name: 'Delete-Event',
    element: allEvents,
    allowedRoles: ['hr'],
  },
]

export default routes
