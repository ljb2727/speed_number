import React, { Component } from "react";

const textStyle = {
    textAlign: "center",
    transition: "0.2s",
    color: "#fff",
    backgroundColor: "#ff0000",
};

class Message extends Component {
    game_state = () => {
        const { current_num, target_num, max, status } = this.props;
        if (status === "ready") {
            return <div style={textStyle}>Ready!</div>;
        }
        if (current_num - 1 === max) {
            return <div style={textStyle}>clear</div>;
        } else if (current_num - 1 !== target_num) {
            return (
                <div style={textStyle}>
                    {target_num}은 올바른 숫자가 아닙니다.
                </div>
            );
        }
    };
    render() {
        return (
            <div>
                <div>{this.game_state()}</div>
            </div>
        );
    }
}

export default Message;
