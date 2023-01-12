import React from "react";

class AddComponent extends React.Component {
    state = {
        detailJob: '',
        salary: '',
    }
    handleChangeDetail_Job = (event) => {
        this.setState({
            detailJob: event.target.value
        });
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.detailJob || !this.state.salary) {
            alert('Missing input');
            return;
        }

        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            detailJob: this.state.detailJob,
            salary: this.state.salary
        })

        alert('Add successful');

        this.setState({
            detailJob: '',
            salary: ''
        })

    }

    render() {
        return (
            <form>
                <label htmlFor="detailJob">Detail Job:</label> <br />
                <input
                    type="text"
                    value={this.state.detailJob}
                    onChange={(event) => this.handleChangeDetail_Job(event)} /> <br />
                <label htmlFor="salary">Salary:</label> <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /> <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(e) => this.handleSubmit(e)} />
            </form>
        )
    }
}

export default AddComponent;