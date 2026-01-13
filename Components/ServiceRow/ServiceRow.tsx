// Components/ServiceRow.tsx

import { FC } from 'react';

interface ServiceRowProps {
  imageUrl: string;
  icon: string;
  label: string;
  description: string;
}

const ServiceRow: FC<ServiceRowProps> = ({ imageUrl, icon, label, description }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 shadow-md mb-8">

      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 items-center">

        {/* الصورة */}
        <div>
          <img
            src={imageUrl}
            alt={label}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* النصوص */}
        <div>
          <div className="flex items-center space-x-4">
            <img src={icon} alt="icon" className="w-12 h-12" />
            <h3 className="text-xl font-semibold text-blue-900">{label}</h3>
          </div>

          <p className="text-gray-700 mt-2">{description}</p>

          <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            View More
          </button>
        </div>

      </div>

    </div>
  );
};
export default ServiceRow;