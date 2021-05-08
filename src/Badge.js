import React from 'react';

function Badge({title, badgeClass}){
     return (
          <span className={`tag is-rounded ${ badgeClass }`} >{title}</span>
     );
}

export default Badge;