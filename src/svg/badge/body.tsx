import { CSSProperties } from "react";

export const BadgeBody = (props : { className? : string, style? : CSSProperties}) => {
    return (
        <svg  preserveAspectRatio="none" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402 49" className={props.className}>
            <path fill={props.style?.borderColor} d="m0 24.5v24.5h13v-49h-13zm389 0v24.5h13v-49h-13z"/>
            <path fill={props.style?.color} d="m13 24.5v24.5h376v-49h-376z"/>
        </svg>
    );
};