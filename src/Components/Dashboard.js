import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (





            <div className="border border-dark  col-xl-4 mx-auto text-center p-3 my-5">

                <div>
                    <nav className="navbar navbar-expand-lg navbar-light text-left">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    <a className="nav-link" href="#">Add Task</a>
                                    <a className="nav-link" href="#">View Task</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <hr />

                    <form className="d-flex my-4">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>

                    <table className="table mt-5 table-bordered border-dark">
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
            </div>
        )
    }
}

export default Dashboard
