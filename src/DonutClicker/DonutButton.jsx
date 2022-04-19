import donut from "./donut.png";
import { useState } from "react";

function DonutButton(props) {
    const [height, setHeight] = useState(380);
    const [width, setWidth] = useState(640);

    const { incrementCount } = props;

    const shrinkDonut = () => {
        setHeight((height) => 342);
        setWidth((width) => 576);
    }

    const growDonut = () => {
        setHeight((height) => 380);
        setWidth((width) => 640);
    }

    return (
        <>
            <img src={donut} height={height} width={width} onMouseDown={shrinkDonut} onMouseUp={growDonut} onClick={incrementCount} />
        </>
    );
}

export default DonutButton;
