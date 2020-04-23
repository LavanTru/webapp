import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';

class WasherJobCapabilitiesComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            washerId : '5ea1d1552cea5c7ddc865ded', // id must be consumed from the user session 
            washerCapabilities: [],
            message: null
        }

        this.refreshWasherJobCapabilities = this.refreshWasherJobCapabilities.bind(this);
        this.handleChecked = this.handleChecked.bind(this); 
        this.updateWasherJobCapabilitiesClicked = this.updateWasherJobCapabilitiesClicked.bind(this);
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
    }

    refreshWasherJobCapabilities(){
        WasherDataService.retrieveWasher(this.state.washerId)
        .then(
            response => {
                this.setState({washerCapabilities: response.data.jobCapabilities})
                console.log(this.state.washerCapabilities)
            }
        )
    }

    handleChecked (event) {
        const washerJobId = event.target.id;
        const isChecked = event.target.checked;
        
        function changeActive(job){
            if(job.id === washerJobId){
                job.active = isChecked
            }
            return job
        }

        let updatedWasherCapabilities = this.state.washerCapabilities.map(changeActive)
        this.setState({washerCapabilities: updatedWasherCapabilities})   
        console.log(this.state.washerCapabilities);
    }

    updateWasherJobCapabilitiesClicked(){
        console.log(this.state.washerCapabilities);
        WasherDataService.updateWasherJobCapabilities(this.state.washerId, this.state.washerCapabilities)
            .then(
                response => {
                    if(response.status === 200){
                        this.setState({ message: `Your jobs are saved successfully` })
                    }else{
                        this.setState({ message: `Unable to save your jobs. Try again later.` })
                    }
                    
                }
            )
    }

    render(){
        return (
            <div className="container">
            <h3>Your offered jobs</h3>
            {
            this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <p>Select the jobs you offer to your clients:</p>
            <table className="table" >
                <thead>
                    <tr>
                        <th>Job</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.washerCapabilities.map(
                        washerJob =>
                        <tr>
                            <td>{washerJob.job}</td>
                            <td>
                                <div className="custom-control custom-switch"> 
                                    <input align="right" type="checkbox" className="custom-control-input" name={washerJob.id} id={washerJob.id} defaultChecked={washerJob.active} onChange={this.handleChecked} />
                                    <label className="custom-control-label" for={washerJob.id}></label>
                                </div>
                            </td>
                        </tr>
                         
                    )
                    }
                </tbody>
            </table>
            <div className="row">
                <button className="btn btn-success" onClick={this.updateWasherJobCapabilitiesClicked}>Save</button>
            </div>
            </div>  
        )
    }
}

export default WasherJobCapabilitiesComponent