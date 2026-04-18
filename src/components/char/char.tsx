import type { charModel } from "../../models/charModel"

interface charProps {
    charModel: charModel;
    onCharClick: (charModel: charModel) => void;
}

export default function Char({ charModel, onCharClick }: charProps) {


    return (
        <>
            <button onClick={() => onCharClick(charModel)}>{charModel.value}</button>
        </  >
    )
}