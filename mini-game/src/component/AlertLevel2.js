import React from 'react';

const AlertLevel2 = (props) => {
  return (
    <div
      className="p-4 mb-4 text-sm text-red-700 text-center bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert">
      <span className="font-medium ">{props.text}</span>
    </div>
  );
};

export default AlertLevel2;
