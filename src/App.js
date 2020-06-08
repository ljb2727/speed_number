import React, { Component } from "react";
import Template from "./components/Template";
import TileList from "./components/TileList";
import Button from "./components/Button";
import Message from "./components/Message";
import Timer from "./components/Timer";
import Record from "./components/Record";
import "./App.css";

class App extends Component {
    max = 25;
    state = {
        status: "ready",
        next_num: this.max,
        random_array: [],
        current_num: 1,
        target_num: 0,
        strikes: 0,
        timer: false,
        record: [],
        name: "",
        bestTime: null,
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
            current_num,
            next_num,
            status,
            strikes,
        } = this.state;
        if (status !== "ing") {
            return false;
        }
        this.setState({ target_num: t });
        if (current_num === t) {
            const index = random_array.findIndex((i) => i.id === t);
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

        //게임 클리어시
        if (current_num === next_num) {
            this.endTimer();
            this.setState({ status: "finish" });
            this.record(strikes);
        }
    };

    //timer
    timerTick = () => {
        this.setState({
            strikes: this.state.strikes + 10,
        });
    };
    changeName = (e) => {
        this.setState({ name: e.target.value });
    };
    startTimer = () => {
        if (!this.state.name) {
            alert("이름을 입력해주세요.");
            return false;
        }
        if (!this.state.timer) {
            this._interval = setInterval(this.timerTick, 10);
            this.setState({ timer: true, status: "ing" });
        }
    };

    endTimer = () => {
        clearInterval(this._interval);
        this.setState({ timer: false });
    };
    record = (time) => {
        const { name } = this.state;
        const copy = [...this.state.record];
        const copy2 = copy.concat({ time: time, name: name });
        this.setState({ record: copy2 });
        const bestTime =
            copy2[
                copy2.findIndex(
                    (e) => e.time === Math.min(...copy2.map((e) => e.time))
                )
            ];
        this.setState({ bestTime: bestTime });
    };

    handleRestart = () => {
        this.handleMakeRandom();
        this.startTimer();
    };

    handleReset = () => {
        this.handleMakeRandom();
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
            record,
            name,
            bestTime,
        } = this.state;
        const {
            handleRestart,
            handleClick,
            startTimer,
            changeName,
            handleReset,
        } = this;
        return (
            <Template
                tileList={
                    <TileList
                        array={random_array}
                        onClick={handleClick}
                        status={status}
                    />
                }
                button={
                    <Button
                        onCreate={handleRestart}
                        onReset={handleReset}
                        status={status}
                    />
                }
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
                        onChange={changeName}
                        strikes={strikes}
                        status={status}
                        name={name}
                    />
                }
                record={<Record record={record} bestTime={bestTime} />}
            ></Template>
        );
    }
}

export default App;
