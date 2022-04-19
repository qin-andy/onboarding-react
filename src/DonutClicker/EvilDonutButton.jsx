import evil from "./evil donut.png";
import { useState } from "react";

function EvilDonutButton(props) {
    const [height, setHeight] = useState(380);
    const [width, setWidth] = useState(640);

    const { decrementCount } = props;

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
            <img src={evil} height={height} width={width} onMouseDown={shrinkDonut} onMouseUp={growDonut} onClick={decrementCount} />
        </>
    );
}

export default EvilDonutButton;
