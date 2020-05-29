import React, { Component } from "react";

const Button = ({ onCreate }) => {
    return (
        <div>
            <button
                onClick={() => {
                    onCreate();
                }}
            >
                button
            </button>
        </div>
    );
};
export default Button;
