import { useState } from 'react';
import Char from '../char/char';
import Show from '../show/show';
import './keyBoard.scss';
import { charModel } from '../../models/charModel';

export default function KeyBoard() {

    const [isHebrew, setIsHebrew] = useState(true);
    const [isLower, setIsLower] = useState(true);
    const [isBold, setisBold] = useState(true);
    const [fontSize, setFontSize] = useState(20);
    const [color, setColor] = useState("#000000");
    const [chars, setChars] = useState<charModel[]>([]);

    const hebrew = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת"];
    const englishLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const englishCamel = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialChars = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
        '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',
        "'", '"', ',', '.', '<', '>', '/', '?', '\\', '|',
        '`', '~'
    ];
    const changeLanguage = () => {
        setIsHebrew(!isHebrew);
    }

    const changeType = () => {
        setIsLower(!isLower);
    }

    const changeBold = () => {
        setisBold(!isBold);
    }

    const write = (charModel: charModel) => {
        setChars(prevChars => [...prevChars, charModel]);
    }

    const deleteOne = () => {
        setChars(prevChars => prevChars.slice(0, -1));
    }
    const deleteAll = () => {
        setChars([]);
    }
    return (
        <div className="keyboard-wrapper">
            <Show chars={chars} />

            <div className="controls">
                <button className="control-btn" onClick={deleteOne}>delete</button>
                <button className="control-btn" onClick={deleteAll}>delete all</button>
                <button className="control-btn" onClick={changeLanguage}>{isHebrew ? "ENG" : "עבר"}</button>
                <button className="control-btn" onClick={changeType}>{isLower ? "Camel" : "lower"}</button>
                <button className="control-btn" onClick={changeBold} style={{ fontWeight: isBold ? 'bold' : 'normal' }}>B</button>
                <input type="range" min="12" max="80" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} />
                <span>{fontSize}px</span>
                <div className="color-picker-wrapper">
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="color-picker" />
                </div>
            </div>

            <div className="keyboard-base">
                {numbers.map((value, index) => {
                    const myCharData = new charModel(String(value), color, isBold, fontSize);
                    return <Char key={index} charModel={myCharData} onCharClick={write} />
                })
                }
                {specialChars.map((value, index) => {
                    const myCharData = new charModel(String(value), color, isBold, fontSize);
                    return <Char key={index} charModel={myCharData} onCharClick={write} />
                })
                }
                <div className="letters-grid">
                    {!isLower ? (
                        englishCamel.map((value, index) => {
                            const myCharData = new charModel(value, color, isBold, fontSize);
                            return <Char key={index} charModel={myCharData} onCharClick={write} />
                        })
                    ) : isHebrew ? (
                        hebrew.map((value, index) => {
                            const myCharData = new charModel(value, color, isBold, fontSize);
                            return <Char key={index} charModel={myCharData} onCharClick={write} />
                        })
                    ) : (
                        englishLower.map((value, index) => {
                            const myCharData = new charModel(value, color, isBold, fontSize);
                            return <Char key={index} charModel={myCharData} onCharClick={write} />
                        })
                    )}
                </div>
                <button id='space' onClick={() => write(new charModel(" ", color, isBold, fontSize))}></button>
            </div>
        </div>

    )
}