
import React from 'react';

export const TableSkeleton: React.FC = () => (
    <div className="space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            ))}
        </div>
    </div>
);

export const CardSkeleton: React.FC = () => (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-pulse">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
    </div>
);

export const ChartSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
    <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
  </div>
);
