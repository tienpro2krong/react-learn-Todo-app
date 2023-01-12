import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', detailJob: 'Front-end', salary: '500' },
            { id: 'job2', detailJob: 'Back-end', salary: '600' },
            { id: 'job3', detailJob: 'Tester', salary: '400' }
        ]
    }

    addNewJob = (job) => {
        console.log("Job: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteItem = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id != job.id);
        this.setState({
            arrJobs: currentJob
        });
    }

    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteItem={this.deleteItem} />
            </>
        )
    }
}

export default MyComponent;