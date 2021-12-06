import React, {useState} from 'react';
import './Styles/main.css';

function ProjectLinks() {
    const [shown, setShown ] = useState(false);

  return (
    <div className="ProjectLinks">
      <div className='container'>
        <button
        onMouseEnter={ () => setShown(true)}
        onMouseLeave={ () => setShown(false)}
        >this is a button</button>
        {shown && (
            <div><h1>this is what shows</h1></div>
        )}
      </div>
    </div>
  );
}

export default ProjectLinks;
