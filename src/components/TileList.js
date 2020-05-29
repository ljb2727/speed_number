import React from "react";
import "./tile.css";

const Tile = ({ text }) => {
    return (
        <div className="tile">
            <div className="inner">{text}</div>
        </div>
    );
};

const TileList = ({ next_number }) => {
    const random_array = new Array(next_number)
        .fill("")
        .map((v, i) => i)
        .sort(() => Math.random() - Math.random())
        .map((v, i) => <Tile text={v + 1} key={i} />);

    return <div className="tile_list">{random_array}</div>;
};

export default TileList;
