import React from 'react';
import './style.css';
import renderTable from './helpers/render/render-table';
import renderPuzzle from './helpers/render/render-puzzle';
import createSudoku from './helpers/create-sudoku';

const Sudoku = () => {
    const handleSudoku = async () => {
        const [puzzle, creationTime] = createSudoku();
        renderPuzzle(puzzle, creationTime);
        fetch('/post-sudoku', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
              }),
            body: JSON.stringify({
                puzzle,
                creationTime,
            }),
        })
    }
    return (
        <div>
            {renderTable()}
            <button onClick={handleSudoku}>
                Create
            </button>
            <p id="creationTime">
                Creation time:
            </p>
            <p id="numberOfClues">
                Number of clues:
            </p>
        </div>
    )
}

export default Sudoku;