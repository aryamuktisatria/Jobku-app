import React from "react";

const JobDetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 animate-pulse">
      
      {/* Header Skeleton */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex-1">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="flex items-center mb-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-24"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-full w-20"></div>
          </div>
        </div>
      </div>

      {/* Info Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg mr-3">
                <div className="size-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description Skeleton */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        </div>
      </div>

      {/* Qualifications Skeleton */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-4"></div>
        <div className="space-y-3">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 mr-3"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Skeleton */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-64"></div>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded-xl w-32"></div>
              <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded-xl w-24"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailSkeleton;