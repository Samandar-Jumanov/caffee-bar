"use client"

import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { IDescription } from '@/types/types';

const ExpandableText    = (  {description}  : IDescription    ) => {
  const isLongText = description.length > 100; 

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Typography variant="body2" color="text.secondary">
      {isExpanded || !isLongText ? description : `${description.substring(0, 100)}... `}
      {isLongText && (
        <span
          style={{ color: 'blue', cursor: 'pointer' }} 
          onClick={handleToggleExpand}
        >
          {isExpanded ? 'See Less' : 'See More'}
        </span>
      )}
    </Typography>
  );
};

export default ExpandableText;
