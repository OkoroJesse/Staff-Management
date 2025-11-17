
export type Page = 'Dashboard' | 'Staff' | 'Profile' | 'Attendance' | 'Leave' | 'Payroll' | 'Tasks' | 'Settings';

export interface StaffMember {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  joiningDate: string;
}
