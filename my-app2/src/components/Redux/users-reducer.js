const varFOLLOW = 'FOLLOW';
const varUNFOLLOW = 'UNFOLLOW';
const varSetUsers = 'SET-USERS';

let initialState = {
    UsersData: [
        {id: 1, photo: 'https://www.kusadasirestaurant.com/wp-content/uploads/2021/06/ikon-man.png',followed: false, status: 'trent', name: "Andy", location: {country: "Belarus", city: "Minsk"}},
        {id: 2, photo: 'https://www.igeacps.it/app/uploads/2020/03/Riccardo-Santagata.png',followed: true, status: 'be like', name: "Dmitry", location: {country: "Ukraine", city: "Kiev"}},
        {id: 3, photo: 'https://pngimage.net/wp-content/uploads/2018/05/dosen-png-7.png',followed: true, status: 'yo yo', name: "Petro", location: {country: "Ukraine", city: "Dnepr"}},
        {id: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKNy38wfvGKqs5oRzuMwpgywiTlF4FmHZ2JRDG2JUWXl3l7wHP_zcQ8adJLDvEMBsiCg&usqp=CAU', followed: false, status: 'how how', name: "Katja", location: {country: "Belarus", city: "Brest"}}
    ],
    textPost: "text from state"
};

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case varFOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case
        varUNFOLLOW:
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case
        varSetUsers: {
                return {...state, UsersData: [...state.UsersData, ...action.UsersData]}
        }
        default
        :
            return state;
    }
}

export default UsersReducer;

export const followAC = ({userId}) => {
    return {type: varFOLLOW, userId};
}


export const unfollowAC = ({userId}) => {
    return {type: varUNFOLLOW, userId};
}

export const setUsersAC = ({userId}) => {
    return {type: varSetUsers, userId};
}
