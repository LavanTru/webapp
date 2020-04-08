import React, { Component }  from 'react';
import LndryJobDataService from '../service/LndryJobDataService'

class ListLndryJobsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            lndryJobs: [],
            message: null
        }
        this.refreshLndryJobs.bind = this.refreshLndryJobs.bind(this)
        this.deleteLndryJobClicked.bind = this.deleteLndryJobClicked.bind(this)
        this.updateLndryJobClicked.bind = this.updateLndryJobClicked.bind(this)
        this.addLndryJobClicked.bind = this.addLndryJobClicked.bind(this)
    }

    componentDidMount() {
        this.refreshLndryJobs();
    }

    refreshLndryJobs() {
        LndryJobDataService.retrieveAllLndryJobs()
            .then(
                response => {
                    console.log(response);
                    this.setState({lndryJobs: response.data});
                }
            )
    }

    //Need to fix this method
    addLndryJobClicked() {
        this.props.history.push(`/`)
    }

    updateLndryJobClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`${id}`)
    }

    deleteLndryJobClicked(id) {
        LndryJobDataService.deleteLndryJob(id)
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
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Laundry Job</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.lndryJobs.map(
                                    lndryJob =>
                                   <tr>
                                        <td>{lndryJob.id}</td>
                                        <td>{lndryJob.job}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateLndryJobClicked(lndryJob.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteLndryJobClicked(lndryJob.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addLndryJobClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListLndryJobsComponent