import React from 'react';

const Tutorials = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <iframe className="px-5 pb-5" width="100%" height="360" src="http://www.youtube.com/embed/Og46v0IuZyQ"/>
            <iframe className="px-5 pb-5" width="100%" height="360" src="http://www.youtube.com/embed/FOwniOVow40"/>
            <iframe className="px-5 pb-5" width="100%" height="360" src="http://www.youtube.com/embed/XyO-xtqosR4"/>
            <iframe className="px-5 pb-5" width="100%" height="360" src="http://www.youtube.com/embed/xWRERLYm7BU"/>
        </div>
        
    );
}
 
export default Tutorials;