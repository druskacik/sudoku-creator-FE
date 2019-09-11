import React from 'react';

const renderGrid = () => {
    const grid = [];
    const renderThreeRows = (i) => {
        const rows = [];
        const renderRow = (i, j) => {
            const elems = [];
            for (let k = 0; k < 9; k += 1) {
                elems.push(<td key={`${3*i + j}${k}`} id={`${3*i + j}${k}`}/>);
            }
            return elems;
        }
        for (let j = 0; j < 3; j += 1) {
            rows.push(<tr key={`${3*i + j}row`}>{renderRow(i, j)}</tr>);
        }
        return rows;
    }
    for (let i = 0; i < 3; i += 1) {
        grid.push(
            <tbody key={`${i}threeRows`}>
                {renderThreeRows(i)}
            </tbody>
        )
    }
    return grid;
}

const renderSudoku = () => {
    return (
        <div>
            <table>
                <colgroup>
                    <col span="3"/>
                </colgroup>
                <colgroup>
                    <col span="3"/>
                </colgroup>
                <colgroup>
                    <col span="3"/>
                </colgroup>
                {renderGrid()}
            </table>
        </div>
    )
}

export default renderSudoku;