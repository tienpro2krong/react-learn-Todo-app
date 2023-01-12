import React from "react";

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleClickDelte = (job) => {
        alert('Delete Successful: ', job);
        this.props.deleteItem(job);

    }

    render() {
        // let { arrJobs } = this.props;
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="Job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.detailJob} - {item.salary} $
                                            <>
                                                <span>
                                                    <button
                                                        style={{ backgroundColor: 'red', cursor: 'pointer' }}
                                                        onClick={() => this.handleClickDelte(item)}>
                                                        x
                                                    </button>
                                                </span>

                                            </>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div onClick={() => this.handleShowHide()}><button >Hide</button></div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;