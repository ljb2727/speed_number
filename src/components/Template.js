import React from "react";

const Template = ({ tileList, button, message, timer }) => {
    return (
        <main className="speed-template">
            {tileList}
            {message}
            {timer}
            {button}
        </main>
    );
};

export default Template;
