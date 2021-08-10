export const SET_COVID_ARR = 'COVID::SET_COVID_ARR'
export const SET_LOADING_STATUS = 'COVID::SET_LOADING_STATUS'
export const SET_ERROR_STATUS = 'COVID::SET_ERROR_STATUS'

export const setCovidArr = (covidArr) => ({
    type: SET_COVID_ARR,
    payload: {
        covidArr,
    },
})
export const setLoadingStatus = (isLoading) => ({
    type: SET_LOADING_STATUS,
    payload: {
        isLoading,
    },
})
export const setErrorStatus = (error='Произошла неизвестная ошибка') => ({
    type: SET_ERROR_STATUS,
    payload: {
        error,
    },
})

const uri = 'https://api.covid19api.com/dayone/country/ru'

export const fetchCovid = () => {
    return (dispatch) => {
        dispatch(setLoadingStatus(true))
        fetch(uri)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    throw Error('Something went wrong')
                }
                return response.json()
            })
            .then((rs) => {
                dispatch(
                    setCovidArr(
                        rs
                            .filter((el, i) => (i > 530 && i < 551 ? el : null))
                            .map((el, id) => {
                                return {
                                    id,
                                    date: el.Date.substr(0, 10),
                                    confirmed: el.Confirmed,
                                    active: el.Active,
                                    recovered: el.Recovered,
                                    deathes: el.Deaths,
                                }
                            })
                    )
                )
                dispatch(setLoadingStatus(false))
                dispatch(setErrorStatus(null))
            })
            .catch((er) => {
                console.error('error', er)
                dispatch(setErrorStatus())
            })
    }
}
