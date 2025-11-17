
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  change?: string;
  changeType?: 'increase' | 'decrease';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, changeType }) => {
  const changeColor = changeType === 'increase' ? 'text-green-600' : 'text-red-600';
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        {change && (
          <p className={`text-xs mt-2 ${changeColor}`}>
            {change}
          </p>
        )}
      </div>
      <div className="bg-primary-100 rounded-full p-3">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
    </div>
  );
};

export default StatCard;
