import React, { Component } from "react";
import Template from "./components/Template";
import TileList from "./components/TileList";
import Button from "./components/Button";
import Message from "./components/Message";
import Timer from "./components/Timer";

class App extends Component {
    max = 5;
    state = {
        status: "ready",
        next_num: this.max,
        random_array: [],
        current_num: 1,
        target_num: 0,
        strikes: 0,
        timer: false,
        record: [],
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
            strikes: 0,
            status: "ready",
        });
        this.endTimer();
    };
    handleClick = (t) => {
        const {
            random_array,
            target_num,
            current_num,
            next_num,
            status,
        } = this.state;
        if (status === "ready") {
            return false;
        }
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
        //타일 클릭시 무조건 시작
        this.startTimer();

        if (current_num == next_num) {
            this.endTimer();
            this.setState({ status: "finish" });
        }
    };

    //timer
    timerTick = () => {
        this.setState({
            strikes: this.state.strikes + 10,
        });
    };
    startTimer = () => {
        if (!this.state.timer) {
            this._interval = setInterval(this.timerTick, 10);
            this.setState({ timer: true, status: "ing" });
        }
    };

    endTimer = () => {
        clearInterval(this._interval);
        this.setState({ timer: false });
    };

    componentDidMount() {
        this.handleMakeRandom();
    }
    render() {
        const {
            random_array,
            target_num,
            current_num,
            strikes,
            status,
        } = this.state;
        const { handleMakeRandom, handleClick, startTimer } = this;
        return (
            <Template
                tileList={
                    <TileList
                        array={random_array}
                        onClick={handleClick}
                        status={status}
                    />
                }
                button={<Button onCreate={handleMakeRandom} />}
                message={
                    <Message
                        target_num={target_num}
                        current_num={current_num}
                        max={this.max}
                        status={status}
                    />
                }
                timer={
                    <Timer
                        onClick={startTimer}
                        strikes={strikes}
                        status={status}
                    />
                }
            ></Template>
        );
    }
}

export default App;
