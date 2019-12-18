const corsFetch = async path => {
    try {
        return await fetch(`http://127.0.0.1:5000/${path}`, {
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    } catch (error) {
        throw Error(error);
    }
};

export default corsFetch;
