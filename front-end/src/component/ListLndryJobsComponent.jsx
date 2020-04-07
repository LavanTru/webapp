import React, { Component }  from 'react';

class ListLndryJobsComponent extends Component {

    render() {
        return (
            <div className="container">
                <h3>All Laundry Jobs</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Laundry Job</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Hard Coded Laundry Job</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListLndryJobsComponent