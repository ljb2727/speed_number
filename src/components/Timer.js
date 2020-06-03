import React, { Component } from "react";

class Timer extends Component {
    render() {
        const { onClick, strikes, status } = this.props;
        return (
            <div>
                {status === "ready" ? (
                    <button onClick={onClick}>start</button>
                ) : (
                    <div>{strikes}ms</div>
                )}
            </div>
        );
    }
}

export default Timer;
