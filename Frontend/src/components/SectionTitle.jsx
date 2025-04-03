import React from 'react';

export default function SectionTitle({title}) {
  return (
    <div className="text-center flex  justify-start py-6 gap-3 ">
      {/* Green Bar */}
      <div className="w-8 mt-3 h-1 bg-green-700 "></div>

      {/* About Us Text */}
      <h2 className="text-xl uppercase font-semibold">{title}</h2>
    </div>
  );
}

