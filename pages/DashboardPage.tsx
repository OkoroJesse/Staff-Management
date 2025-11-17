
import React from 'react';
import StatCard from '../components/StatCard';
import { UsersIcon, BriefcaseIcon, CheckCircleIcon, ClockIcon } from '../components/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const staffData = [
  { name: 'Jan', Hired: 4, Resigned: 2 },
  { name: 'Feb', Hired: 3, Resigned: 1 },
  { name: 'Mar', Hired: 5, Resigned: 2 },
  { name: 'Apr', Hired: 4, Resigned: 1 },
  { name: 'May', Hired: 6, Resigned: 3 },
  { name: 'Jun', Hired: 5, Resigned: 1 },
];

const attendanceData = [
  { name: 'Mon', Present: 85, Absent: 15 },
  { name: 'Tue', Present: 92, Absent: 8 },
  { name: 'Wed', Present: 95, Absent: 5 },
  { name: 'Thu', Present: 88, Absent: 12 },
  { name: 'Fri', Present: 98, Absent: 2 },
];

const departmentData = [
  { name: 'Engineering', value: 400 },
  { name: 'Sales', value: 300 },
  { name: 'Marketing', value: 300 },
  { name: 'HR', value: 200 },
];
const COLORS = ['#1d4ed8', '#3b82f6', '#93c5fd', '#dbeafe'];

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin!</h1>
        <p className="text-gray-500 mt-1">Here's what's happening with your team today.</p>
      </div>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Staff" value="128" icon={UsersIcon} change="+5 this month" changeType="increase" />
        <StatCard title="On Leave Today" value="7" icon={BriefcaseIcon} />
        <StatCard title="Pending Requests" value="3" icon={ClockIcon} />
        <StatCard title="Projects" value="42" icon={CheckCircleIcon} change="-2 from yesterday" changeType="decrease" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Staffing Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={staffData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
              <Line type="monotone" dataKey="Hired" stroke="#1d4ed8" strokeWidth={2} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Resigned" stroke="#9ca3af" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Department Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={departmentData} cx="50%" cy="50%" labelLine={false} outerRadius={110} fill="#8884d8" dataKey="value" nameKey="name" >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
       <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-4">Weekly Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }} />
              <Legend iconSize={10} wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
              <Bar dataKey="Present" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Absent" fill="#d1d5db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
};

export default DashboardPage;
