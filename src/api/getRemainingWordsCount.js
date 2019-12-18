import corsFetch from "./corsFetch";

const getRemainingWordsCount = async () => {
    const response = await corsFetch("get-remaining-asgardian-words-count");

    return response.json();
};

export default getRemainingWordsCount;
