import { charModel } from "../../models/charModel"
import './show.scss'

interface ShowProps {
    chars: charModel[];
}

export default function Show({ chars }: ShowProps) {

    return (
        <div className="show-container">
            <div className="show-screen">
                {
                    chars.map((item, index) => (
                        <span
                            key={index}
                            style={{
                                color: item.color,
                                fontSize: item.fontSize,
                                fontWeight: item.isBold ? 'bold' : 'normal',
                                display: 'inline-block'
                            }}
                        >
                            {item.value === " " ? "\u00A0" : item.value}
                        </span>
                    ))
                }
            </div>
        </div>
    );
}