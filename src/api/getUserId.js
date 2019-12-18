import createUser from "./createUser";

const isUserLoggedIn = () => {
    return Boolean(localStorage.getItem("userId"));
};

const setUserId = userId => {
    localStorage.setItem("userId", userId);
};

const getUserId = async () => {
    let user = {};

    if (isUserLoggedIn()) {
        user.userId = localStorage.getItem("userId");
    } else {
        user = await createUser();
        setUserId(user.userId);
    }

    return user.userId;
};

export default getUserId;
