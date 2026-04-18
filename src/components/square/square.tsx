import { useState } from 'react';
import './square.scss'

interface SquareProps {
    value: string | null; 
    onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
    return (
        <h2 className={`square-container ${value}`} onClick={onSquareClick}>
            {value}
        </h2>
    );
}