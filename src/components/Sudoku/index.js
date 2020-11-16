import React from 'react';
import './style.css';
import renderTable from './helpers/render/render-table';
import renderPuzzle from './helpers/render/render-puzzle';
import createSudoku from './helpers/create-sudoku';

import database from '../../firebase';

const Sudoku = () => {
    const handleSudoku = async () => {
        const [puzzle, creationTime] = createSudoku();
        renderPuzzle(puzzle, creationTime);
        let stringified = '';
        for (let i = 0; i < 9; i += 1) {
            for (let j = 0; j < 9; j += 1) {
                stringified += puzzle[i][j] ? `${puzzle[i][j]}` : '.';
            }
        }

        try {
            const newSudoku = database.ref('/sudoku').push();
            await newSudoku.set({
                text: stringified,
                creationTime,
            });
            
            // this will be the unique hash
            console.log(newSudoku.key);
        } catch (err) {
            console.log(err);
        }
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