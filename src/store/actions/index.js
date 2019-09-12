export const readDatabase = () => {
    return (dispatch) => {
        fetch('https://rocky-headland-25890.herokuapp.com/api/database', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            })
        })
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