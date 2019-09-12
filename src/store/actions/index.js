export const readDatabase = () => {
    return (dispatch) => {
        fetch('https://rocky-headland-25890.herokuapp.com/api/database')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'LOAD_SUDOKUS',
                    data: json,
                })
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: 'LOAD_SUDOKUS_ERROR',
                });
            })
    }
}