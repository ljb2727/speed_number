import React, { Component } from "react";

class Tile extends Component {
    render() {
        const { children } = this.props;
        return <div>{children}</div>;
    }
}

export default Tile;
