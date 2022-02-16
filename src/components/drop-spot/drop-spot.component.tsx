import React, { DragEvent, useState } from 'react';
import './drop-spot.component.scss';

export interface IComponentDropSpotProps {
    index: number;
    onDrop: (e: DragEvent<HTMLDivElement>, index: number) => void;
}

export function ComponentDropSpot(props: IComponentDropSpotProps) {
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const useClassName = ['ws-component-drop-spot', isDragOver ? 'is-drag-over' : ''].filter(Boolean).join(' ');

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    }

    function handleDragLeave(e: DragEvent<HTMLDivElement>) {
        setIsDragOver(false);
    }

    function handleOnDrop(e: DragEvent<HTMLDivElement>) {
        e.stopPropagation();
        e.preventDefault();
        props.onDrop(e, props.index);
        setIsDragOver(false);
    }

    return (
        <div className={useClassName} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleOnDrop}>

        </div>
    );
}
