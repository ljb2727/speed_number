import React, { Component, Fragment } from "react";

class Timer extends Component {
    render() {
        const { onClick, onChange, strikes, status, name } = this.props;
        return (
            <Fragment>
                {status === "ready" ? (
                    <div>
                        <input type="text" value={name} onChange={onChange} />
                        <button onClick={onClick}>start</button>
                    </div>
                ) : (
                    <div>{strikes / 1000}초</div>
                )}
            </Fragment>
        );
    }
}

export default Timer;
