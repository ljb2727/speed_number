import React from "react";
import "./tile.css";

const Tile = ({ text, check, onClick }) => {
    return (
        <div className={`tile ${check && "on"}`}>
            <div
                className="inner"
                onClick={() => {
                    onClick(text);
                }}
            >
                {text}
            </div>
        </div>
    );
};

const TileList = ({ onClick, array }) => {
    const array_list = array.map((e) => (
        <Tile text={e.id} key={e.id} check={e.check} onClick={onClick} />
    ));
    return <div className="tile_list">{array_list}</div>;
};

export default TileList;
