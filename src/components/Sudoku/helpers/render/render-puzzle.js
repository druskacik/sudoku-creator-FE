const renderPuzzle = (puzzle, creationTime) => {
    let numberOfClues = 0;
    for (let i = 0; i < 9; i += 1) {
        for (let j = 0; j < 9; j += 1) {
            const cell = document.getElementById(`${i}${j}`);
            if (Boolean(puzzle[i][j])) {
                cell.innerText = puzzle[i][j];
                numberOfClues += 1;
            } else {
                cell.innerText = '';
            }
        }
    }
    const timeElement = document.getElementById('creationTime');
    timeElement.innerText = `Creation time: ${creationTime} ms`;
    const numberOfCluesElement = document.getElementById('numberOfClues');
    numberOfCluesElement.innerText = `Number of clues: ${numberOfClues}`;
}

export default renderPuzzle;