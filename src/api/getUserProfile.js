import corsFetch from "./corsFetch";

const getUserProfile = async userId => {
    const response = await corsFetch(`get-all-urls-for-user?user_id=${userId}`);

    return response.json();
};

export default getUserProfile;
