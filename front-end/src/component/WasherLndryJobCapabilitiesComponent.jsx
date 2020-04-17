import React, {Component} from 'react';
import WasherDataService from '../service/WasherDataService';

class WasherLndryJobCapabilitiesComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            washerId : '5e763798a4929f3d509d93b9', // id must be consumed from the user session 
            washerCapabilities: [],
            message: null
        }

        this.refreshWasherJobCapabilities = this.refreshWasherJobCapabilities.bind(this);
        this.handleChecked = this.handleChecked.bind(this); 
        this.updateWasherLndryJobCapabilitiesClicked = this.updateWasherLndryJobCapabilitiesClicked.bind(this);
    }

    componentDidMount() {
        this.refreshWasherJobCapabilities();
    }

    refreshWasherJobCapabilities(){
        WasherDataService.retrieveUser(this.state.washerId)
        .then(
            response => {
                this.setState({washerCapabilities: response.data.washerLndryJobCapabilities})
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

    updateWasherLndryJobCapabilitiesClicked(){
        console.log(this.state.washerCapabilities);
        WasherDataService.updateWasherLndryJobCapabilities(this.state.washerId, this.state.washerCapabilities)
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
            <h3>Your laundry jobs</h3>
            {
            this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <p>Select the laundry jobs you offer to your clients:</p>
            <table class="table" >
                <thead>
                    <tr>
                        <th>Laundry Job</th>
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
                <button className="btn btn-success" onClick={this.updateWasherLndryJobCapabilitiesClicked}>Save</button>
            </div>
            </div>  
        )
    }
}

export default WasherLndryJobCapabilitiesComponent