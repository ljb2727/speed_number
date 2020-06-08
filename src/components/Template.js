import React from "react";

const Template = ({ tileList, button, message, timer, record }) => {
    return (
        <main className="speed-template">
            {tileList}
            {message}
            {timer}
            {button}

            <div
                className="record"
                style={{ borderTop: "1px solid #000", margin: "10px 0" }}
            >
                <ul>{record}</ul>
            </div>
        </main>
    );
};

export default Template;
