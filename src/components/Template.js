import React from "react";

const Template = ({ tileList, button }) => {
    return (
        <main className="speed-template">
            {tileList}
            {button}
        </main>
    );
};

export default Template;
