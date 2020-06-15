import React from 'react';

// Render the jobs of the washer in WasherListItem
const WasherListJobs = (props) => { 
        const washerJob = props.washerJob;
        if(washerJob.active){
            return (
            <div className="unitLaundryJobs m-1">
                <p className="mb-0">{washerJob.job}</p>
                </div>);
        }
        else{
            return null;
        }
    
}
export default WasherListJobs