import React, { Component } from "react";
import Template from "./components/Template";
import TileList from "./components/TileList";
import Button from "./components/Button";
import Message from "./components/Message";

class App extends Component {
    max = 25;
    state = {
        next_num: this.max,
        random_array: [],
        current_num: 1,
        target_num: 0,
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
            target_num: 0,
            current_num: 1,
        });
    };
    handleClick = (t) => {
        const { random_array, target_num, current_num } = this.state;
        this.setState({ target_num: t });

        if (current_num == t) {
            console.log("true");
            const index = random_array.findIndex((i) => i.id == t);
            const selected = random_array[index];
            const next_array = [...random_array];

            next_array[index] = {
                ...selected,
                check: !selected.check,
            };
            //this.start_num = this.start_num + 1;
            this.setState({
                random_array: next_array,
                current_num: this.state.current_num + 1,
            });
        } else {
            console.log("false");
        }
    };
    componentDidMount() {
        this.handleMakeRandom();
    }
    render() {
        const { random_array, target_num, current_num } = this.state;
        const { handleMakeRandom, handleClick } = this;
        return (
            <Template
                tileList={
                    <TileList array={random_array} onClick={handleClick} />
                }
                button={<Button onCreate={handleMakeRandom} />}
                message={
                    <Message
                        target_num={target_num}
                        current_num={current_num}
                        max={this.max}
                    />
                }
            ></Template>
        );
    }
}

export default App;
