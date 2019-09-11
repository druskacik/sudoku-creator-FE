export const readDatabase = () => {
    return (dispatch) => {
        fetch('/api/database')
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