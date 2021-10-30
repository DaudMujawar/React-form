import React, { Component } from 'react'

export class Task extends Component {
    render() {
        return (
            <div className="border border-dark col-xl-3 mx-auto text-center p-3 my-3">
                <h3 className="mb-4 fst-italic">Add Task</h3>
                <form>

                    <div>
                        <input className="form-control" type="text" placeholder="Task name" autocomplete="new" /><br />
                        <textarea class="form-control" rows="3" id="message" placeholder="Description" autocomplete="off" name="message"></textarea>
                    </div>
                    <button onClick="" className="btn btn-primary mt-3">Add Task</button>
                </form>
                
            </div>
        )
    }
}

export default Task
