import { CSSProperties } from "react";

export const CowSwissTop = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 132" className={props.className}>
            <g id="Background">
                <path fill={props.style?.borderColor} d="m0 86v86h13v-159h292c3.9 5.8 5.8 10 6.6 13 1.4 4.8 1.4 6.9 0.4 16-1 7.9-1 11.4-0.1 14.3 0.6 2 2.5 4.8 4.1 6.2 1.7 1.4 5.5 3 8.8 3.7 5.2 1 6.7 0.9 17.2-1.8 9-2.3 13.5-2.8 21-2.8 7.5 0.1 10.4 0.6 13.8 2.3 3.2 1.6 5.1 3.7 8.2 8.8l4 6.8v92.5h13v-172h-402z"/>
                <path fill={props.style?.color} d="m13 92.5v79.5h376v-92.5c-7.1-11.9-9-14-12.3-15.6-3.3-1.7-6.2-2.2-13.7-2.3-7.5 0-12 0.5-21 2.8-10.5 2.7-12 2.8-17.3 1.8-3.2-0.7-7-2.3-8.7-3.7-1.6-1.4-3.5-4.2-4.1-6.3-0.9-2.8-0.9-6.3 0.1-14.2 1-9.1 1-11.2-0.4-16-0.8-3-2.7-7.2-4.1-9.3l-2.5-3.7h-292z"/>
            </g>
        </svg>
    );
};