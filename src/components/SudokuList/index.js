import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readDatabase } from '../../store/actions';

class SudokuList extends Component {

    componentDidMount() {
        this.props.readSudokus();
    }

    renderPuzzles(sudokus) {
        const puzzles = []
        for(let sudoku of sudokus) {
            puzzles.push(
                <p key={sudoku.id}>{sudoku.puzzle}</p>
            )
        }
        return puzzles;
    }

    render() {
        return (
            <div>
                Sudoku List
                {this.renderPuzzles(this.props.sudokus)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    sudokus: state.sudokus,
});

const mapDispatchToProps = dispatch => ({
    readSudokus: () => dispatch(readDatabase()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SudokuList);