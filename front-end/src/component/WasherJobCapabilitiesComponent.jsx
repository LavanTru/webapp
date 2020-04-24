import React, {Component} from 'react';
import Switch from "react-switch";
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

    handleChecked (checked, event, id) {
        const washerJobId = id;
        const isChecked = checked;
        
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
            <h3>My jobs</h3>
            {
            this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <p>Select the jobs you offer to your washees:</p>
            <div className="row">
                <div className="col">
                    <h6>My job</h6>
                </div>
                <div className="col">
                    <h6>Off/On</h6>
                </div>
                <div className="col">
                    <h6>My best speed</h6>
                </div>
            </div>
                {
                this.state.washerCapabilities.map(
                    washerJob =>
                    <div className="row">
                        <div className="col">
                            <label for={washerJob.id}>{washerJob.job}</label>
                        </div>
                        <div className="col">
                            <label className="switch">
                                    <Switch
                                        id={washerJob.id}
                                        onChange={this.handleChecked}
                                        checked={washerJob.active}
                                        className="react-switch"
                                        onColor="#ffe6de"
                                        onHandleColor="#b8627d"
                                        handleDiameter={30}
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                        height={20}
                                        width={48}
                                    />                      
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" 
                            for={washerJob.id} id={washerJob.id} name={washerJob.id} 
                            value= {(washerJob.active) ? (washerJob.speed) : ""}
                            disabled = {(!washerJob.active)}
                              />
                        </div>
                    </div>
                    )
                }   
            <div className="row">
                <button className="btn btn-success" onClick={this.updateWasherJobCapabilitiesClicked}>Save</button>
            </div>
            </div>  
        )
    }
}

export default WasherJobCapabilitiesComponent