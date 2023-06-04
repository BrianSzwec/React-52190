import MOCK_DATA from "../DATA/MOCK_DATA.JS"


export const pedirData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}

