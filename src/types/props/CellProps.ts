import {Cell as CellType} from "../cell.ts";

type CellProps = {
    cell: CellType;
    onClick: (row: number, col: number) => void;
    onRightClick: (row: number, col: number) => void;
};