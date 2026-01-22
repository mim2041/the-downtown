import React from "react";

interface LeftSectionProps<T> {
  title: string;
  data: T[];
  children: (item: T) => React.ReactNode;
}

export default function LeftSections<T>({
  title,
  data,
  children,
}: LeftSectionProps<T>) {
  return (
    <div className="w-full bg-white p-6 border border-gray-100">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>

      {/* Divider */}
      <div className="relative mt-2 mb-6 h-0.5 bg-gray-200">
        <span className="absolute left-0 top-0 h-0.5 w-10 bg-black" />
      </div>

      {/* Dynamic Content */}
      <div className="space-y-4">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {children(item)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
