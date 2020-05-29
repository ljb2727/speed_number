import React, { Component } from "react";
import Template from "./components/Template";
import TileList from "./components/TileList";
import Button from "./components/Button";

class App extends Component {
    max = 25;
    state = {
        next_number: this.max,
        random_array: [],
    };
    handleMakeRandom = (tt) => {
        this.setState({
            random_array: new Array(this.max)
                .fill("")
                .map((v, i) => i + 1)
                .sort(() => Math.random() - Math.random()),
        });
    };
    componentDidMount() {
        this.handleMakeRandom();
    }
    render() {
        const { next_number } = this.state;
        const { handleMakeRandom } = this;
        return (
            <Template
                tileList={<TileList next_number={next_number} />}
                button={<Button onCreate={handleMakeRandom} />}
            ></Template>
        );
    }
}

export default App;
