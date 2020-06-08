import React from "react";

const Button = ({ onCreate, status, onReset }) => {
    return (
        <React.Fragment>
            {status === "finish" && (
                <div>
                    <button
                        onClick={() => {
                            onCreate();
                        }}
                    >
                        재시작
                    </button>
                    <button
                        onClick={() => {
                            onReset();
                        }}
                    >
                        초기화
                    </button>
                </div>
            )}
        </React.Fragment>
    );
};
export default Button;
