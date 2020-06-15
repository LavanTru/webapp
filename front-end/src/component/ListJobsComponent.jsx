import React, { Component }  from 'react';
import JobDataService from '../service/JobDataService'

// Internal page for us to control which jobs exist and Washers can select
class ListJobsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lndryJobs: [],
            message: null
        }
        this.refreshLndryJobs = this.refreshLndryJobs.bind(this)
        this.deleteLndryJobClicked = this.deleteLndryJobClicked.bind(this)
        this.updateLndryJobClicked = this.updateLndryJobClicked.bind(this)
        this.addLndryJobClicked = this.addLndryJobClicked.bind(this)
    }

    componentDidMount() {
        this.refreshLndryJobs();
    }

    refreshLndryJobs() {
        JobDataService.retrieveAllJobs()
            .then(
                response => {
                    console.log(response);
                    this.setState({lndryJobs: response.data});
                }
            )
    }

    addLndryJobClicked() {
        this.props.history.push(`jobs/-1`)
    }

    updateLndryJobClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`jobs/${id}`)
    }

    deleteLndryJobClicked(id) {
        JobDataService.deleteJob(id)
            .then(
                response => {
                    this.setState({ message: `Laundry job with id: "${id}" deleted successfully` })
                    this.refreshLndryJobs()
                }
            )
    }

    render() {
        return (
            <div className="container">
                <h3>All Laundry Jobs</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>    
                                <th>Laundry Job</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.lndryJobs.map(
                                    lndryJob =>
                                   <tr>
                                        <td>{lndryJob.job}</td>
                                        <td>{lndryJob.price}</td>
                                        <td><button className="btn button-green" onClick={() => this.updateLndryJobClicked(lndryJob.id)}>Update</button></td>
                                        <td><button className="btn button-pink" onClick={() => this.deleteLndryJobClicked(lndryJob.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn button-green" onClick={this.addLndryJobClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListJobsComponent