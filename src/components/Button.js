import React, { Component } from "react";

const Button = ({ onCreate }) => {
    return (
        <div>
            <button
                onClick={() => {
                    onCreate();
                }}
            >
                resset
            </button>
        </div>
    );
};
export default Button;
