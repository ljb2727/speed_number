import React, { Component } from "react";
import Template from "./components/Template";
import TileList from "./components/TileList";
import Button from "./components/Button";

class App extends Component {
    max = 25;
    start_num = 1;
    state = {
        next_num: this.max,
        random_array: [],
        current_num: 1,
    };
    handleMakeRandom = () => {
        this.setState({
            random_array: new Array(this.max)
                .fill("")
                .map((v, i) => i + 1)
                .sort(() => Math.random() - Math.random())
                .map((e) => {
                    return { id: e, check: false };
                }),
        });
    };
    handleClick = (t) => {
        const { random_array } = this.state;
        if (this.start_num == t) {
            console.log("true");
            const index = random_array.findIndex((i) => i.id == t);
            const selected = random_array[index];
            const next_array = [...random_array];

            next_array[index] = {
                ...selected,
                check: !selected.check,
            };
            this.setState({
                random_array: next_array,
            });
            this.start_num = this.start_num + 1;
        } else {
            console.log("false");
        }
    };
    componentDidMount() {
        this.handleMakeRandom();
    }
    render() {
        const { random_array } = this.state;
        const { handleMakeRandom, handleClick } = this;
        return (
            <Template
                tileList={
                    <TileList array={random_array} onClick={handleClick} />
                }
                button={<Button onCreate={handleMakeRandom} />}
            ></Template>
        );
    }
}

export default App;
