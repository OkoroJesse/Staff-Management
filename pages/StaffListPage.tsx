
import React, { useState, useMemo, useEffect } from 'react';
import { SearchIcon, PlusIcon, FilterIcon, PencilAltIcon, TrashIcon } from '../components/icons';
import { StaffMember } from '../types';
import Modal from '../components/Modal';
import { TableSkeleton } from '../components/SkeletonLoader';

const mockStaff: StaffMember[] = [
    { id: 'EMP001', name: 'John Doe', avatar: 'https://picsum.photos/id/1005/200/200', email: 'john.doe@example.com', role: 'Frontend Developer', department: 'Engineering', status: 'Active', joiningDate: '2023-01-15' },
    { id: 'EMP002', name: 'Jane Smith', avatar: 'https://picsum.photos/id/1011/200/200', email: 'jane.smith@example.com', role: 'Backend Developer', department: 'Engineering', status: 'Active', joiningDate: '2022-11-20' },
    { id: 'EMP003', name: 'Michael Johnson', avatar: 'https://picsum.photos/id/1012/200/200', email: 'michael.j@example.com', role: 'UI/UX Designer', department: 'Design', status: 'On Leave', joiningDate: '2023-03-10' },
    { id: 'EMP004', name: 'Emily Davis', avatar: 'https://picsum.photos/id/1027/200/200', email: 'emily.d@example.com', role: 'Project Manager', department: 'Management', status: 'Active', joiningDate: '2021-08-01' },
    { id: 'EMP005', name: 'David Wilson', avatar: 'https://picsum.photos/id/1040/200/200', email: 'david.w@example.com', role: 'QA Engineer', department: 'Engineering', status: 'Terminated', joiningDate: '2022-05-25' },
];

const StatusBadge: React.FC<{ status: StaffMember['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-medium rounded-full inline-block";
    const statusClasses = {
        Active: "bg-green-100 text-green-800",
        'On Leave': "bg-yellow-100 text-yellow-800",
        Terminated: "bg-red-100 text-red-800",
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
}

const StaffListPage: React.FC = () => {
    const [staff, setStaff] = useState<StaffMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setStaff(mockStaff);
            setLoading(false);
        }, 1500);
    }, []);

    const filteredStaff = useMemo(() => {
        return staff.filter(member => 
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.role.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [staff, searchTerm]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Staff Directory</h2>
            
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                <div className="relative w-full md:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search staff..." 
                        className="block w-full md:w-80 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-10 pr-4 text-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none">
                        <FilterIcon className="w-4 h-4" />
                        <span>Filter</span>
                    </button>
                    <button onClick={openModal} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700 focus:outline-none">
                        <PlusIcon className="w-4 h-4" />
                        <span>Add Staff</span>
                    </button>
                </div>
            </div>

            {/* Staff Table */}
            {loading ? <TableSkeleton /> : (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Joining Date</th>
                                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredStaff.map(member => (
                                <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <img className="h-10 w-10 rounded-full" src={member.avatar} alt="" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                                <div className="text-sm text-gray-500">{member.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{member.role}</div>
                                        <div className="text-sm text-gray-500">{member.department}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={member.status} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.joiningDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="text-primary-600 hover:text-primary-900 p-1"><PencilAltIcon className="w-5 h-5"/></button>
                                            <button className="text-red-600 hover:text-red-900 p-1"><TrashIcon className="w-5 h-5"/></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Add New Staff Member">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <input type="text" id="role" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button type="button" onClick={closeModal} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Cancel</button>
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-lg hover:bg-primary-700">Save</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default StaffListPage;
