jest.mock("../api/createNewUrlPair");
jest.mock("../api/getRemainingWordsCount");
import React from "react";
import { mount } from "enzyme";
import { CreateUrl } from "./CreateUrl";
import createNewUrlPair from "../api/createNewUrlPair";
import getRemainingWordsCount from "../api/getRemainingWordsCount";
import wait from "waait";

createNewUrlPair.mockImplementation(({ longUrl }) => ({
    shortUrl: "helloWorld",
    longUrl
}));

getRemainingWordsCount.mockImplementation(() => ({ remaining: 100 }));

const FAKE_USER_ID = "1";

let wrapper;
describe("CreateUrl", () => {
    beforeEach(() => {
        wrapper = mount(<CreateUrl userId={FAKE_USER_ID} />);
    });

    it("should render", () => {
        expect(wrapper.render()).toMatchSnapshot();
    });

    it("should show the result after submitting a url", async () => {
        const event = { target: { value: "www.google.com" } };

        wrapper.find("input").simulate("change", event);
        wrapper.find("button").simulate("click", event);
        await wait();
        wrapper.update();

        expect(createNewUrlPair).toHaveBeenCalledTimes(1);
        expect(
            wrapper.find('[data-jest-selector="short-url-result"]').text()
        ).toContain("Here's your short url!");

        expect(
            wrapper.find('[data-jest-selector="short-url-result"]').text()
        ).toContain("Here's your short url!");
    });
});
