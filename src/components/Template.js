import React from "react";

const Template = ({ tileList, button, message }) => {
    return (
        <main className="speed-template">
            {tileList}
            {message}
            {button}
        </main>
    );
};

export default Template;
