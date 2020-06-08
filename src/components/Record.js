import React, { Component } from "react";
import "./tile.css";
class Record extends Component {
    render() {
        const { record } = this.props;
        const record_list = record.map((e, i) => (
            <li key={i}>{`${e.name} : ${e.time / 1000}초`}</li>
        ));
        return (
            <div>
                <ul>{record_list}</ul>
                <hr />
                <strong>df</strong>
            </div>
        );
    }
}

export default Record;
