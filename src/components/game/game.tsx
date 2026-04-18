import { useState, useEffect } from 'react';
import Square from '../square/square';
import confetti from 'canvas-confetti';
import './game.scss'

interface GameProps {
    finishGame: () => void;
}

export default function Game({ finishGame }: GameProps) {
    const [isX, setIsX] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [times, setTimes] = useState(2);
    const [counter, setcounter] = useState(10)
    const [isGameOver, setIsGameOver] = useState(false);

    const winner = checkWin(squares);

    useEffect(() => {
        const t = setInterval(() => {
            setcounter(prev => prev - 1);
        }, 1000);

        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        if (times === 0 && winner) {
            winGame();
        }
        else if (times === 0 && squares.every(s => s !== null)) {
            gameOver();
        }
        else if (counter <= 0 && !winner) {
            gameOver();
        }
    }, [counter, times, squares, winner]);

    const gameOver = () => {
        setIsGameOver(true);
        setTimeout(() => {
            finishGame();
        }, 3000);
    }

    const winGame = () => {
        setTimeout(() => {
            finishGame();
        }, 1500);
    }

    useEffect(() => {
        if (winner) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71']
            });
        }
    }, [winner]);
    const handleClick = (id: number) => {
        if (squares[id] || winner) return;

        const nextSquares = squares.slice();
        nextSquares[id] = isX ? 'X' : 'O';

        setSquares(nextSquares);
        setIsX(!isX);
    };

    const restart = () => {
        setSquares(Array(9).fill(null));
        setTimes(times - 1);
    }

    return (
        <>
            {isGameOver ? <h1 style={{ color: 'red' }}>GAME OVER</h1> :
                <div className="game-container">
                    <span>נשארו לך {counter} שניות</span>
                    <button onClick={restart} disabled={times <= 0}>{times > 0 ? "משחק חדש" : "נגמרו לך הנסיונות"}</button>
                    <div className="status">
                        {winner ? `המנצח: ${winner}` : `התור של: ${isX ? 'X' : 'O'}`}
                    </div>

                    <div className="board-grid">
                        {squares.map((value, index) => (
                            <Square
                                key={index}
                                value={value}
                                onSquareClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            }
        </>
    );
}

function checkWin(squares: any[]) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


