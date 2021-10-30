import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div className="border border-dark col-xl-4 mx-auto text-center p-3 my-3">
                <input type="text" autoComplete="new" />
                <button onClick="" className="btn btn-primary btn-sm ms-3">Search</button><br />

                <table className="table mt-3 table-bordered border-dark">
                    <thead>
                        <tr>
                            <th scope="col" className="col-sm-2">Sr.No</th>
                            <th scope="col" className="col-sm-3">Task</th>
                            <th scope="col" className="col-sm-7">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Dashboard
