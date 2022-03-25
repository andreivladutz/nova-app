import React from "react";
import ReactCodeInput from "react-code-input";

const INDEX_LEN = 5;

const zeros = (length: number) => Array.from({ length }).map(() => "0").join("");

const IndexInput = () => {
    const [indexVal, setIndexVal] = React.useState(zeros(INDEX_LEN));

    return (
        <ReactCodeInput
            name="index-input"
            type="text"
            value={indexVal}
            fields={INDEX_LEN}
            inputMode="numeric"
            onChange={setIndexVal}
        />
    );
};

export default IndexInput;