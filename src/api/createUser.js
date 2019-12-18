import corsFetch from "./corsFetch";

const createUser = async () => {
    const response = await corsFetch("create-user");

    return response.json();
};

export default createUser;
