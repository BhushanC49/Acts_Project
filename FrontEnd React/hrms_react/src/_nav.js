import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilUser,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavGroup,
    name: 'Employee',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Employee',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Employee List',
        to: '/employees',
      },
      {
        component: CNavItem,
        name: 'Attendance Punch-In',
        to: '/attendance',
      },
      {
        component: CNavItem,
        name: 'View Payslip',
        to: '/Payslip',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Leaves',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Apply Leave',
        to: '/leave',
      },
      {
        component: CNavItem,
        name: 'Leave Approval For Manager',
        to: '/leave/leave-approval',
      },
      {
        component: CNavItem,
        name: 'Add LeaveType',
        to: '/leave/leaveType',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Company',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Company',
        to: '/Add-company',
      },
      {
        component: CNavItem,
        name: 'View All Companies',
        to: '/All-companies',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Department',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Department',
        to: '/registerDept',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Attendance',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mark attendance',
        to: '/attendance',
      },
      {
        component: CNavItem,
        name: 'Apply On Duty',
        to: '/onduty',
      },
      {
        component: CNavItem,
        name: 'OnDuty Approval',
        to: '/onduty/onduty-list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Project',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Project',
        to: '/Add-project',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Event',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Event',
        to: '/Add-event',
      },
      {
        component: CNavItem,
        name: 'View All Events',
        to: '/All-event',
      },
      {
        component: CNavItem,
        name: 'Delete Event',
        to: '/delete-event',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Holidays',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Holiday',
        to: '/addHoliday',
      },
      {
        component: CNavItem,
        name: 'View all Holidays',
        to: '/getHolidays',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'HR Dashboard',
        to: '/hrdashboard',
      },
      {
        component: CNavItem,
        name: 'Manager Dashboard',
        to: '/manager-dashboard',
      },
      {
        component: CNavItem,
        name: 'Employee Dashboard',
        to: '/employee-dashboard',
      },
    ],
  },
]

export default _nav
