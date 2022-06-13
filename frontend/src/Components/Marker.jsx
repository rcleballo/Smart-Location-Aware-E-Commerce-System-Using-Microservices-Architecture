import React from 'react';
import './marker.css';

const CustomMarker = (props) => {
    const { color, name, id } = props;
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default CustomMarker;