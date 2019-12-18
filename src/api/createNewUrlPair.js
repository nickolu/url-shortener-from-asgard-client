import corsFetch from "./corsFetch";
const createNewUrlPair = async ({ longUrl, userId }) => {
    const response = await corsFetch(
        `create-shortened-url?original_url=${longUrl}&user_id=${userId}`
    );

    return response.json();
};

export default createNewUrlPair;
