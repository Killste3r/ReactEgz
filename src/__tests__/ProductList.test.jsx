import { waitFor, render, screen } from "@testing-library/react";
import DonorList from "../Donors/DonorList";
import axios from "axios";
// import { BrowserRouter } from "react-router-dom";

jest.mock("axios", () => ({
  get: jest.fn(),
}));


const mockResponse = {
  data: {
    users: [
      {
        id: 7,
        fname: "something",
        lname: "something",
        image: ["someimage", ""],
        age: 20,
        gender: "sometext",
      },
    ],
  },
};

test("fetches data and renders product list", async () => {
  axios.get.mockResolvedValue(mockResponse);
  /*renderWithRouter==*/ render(<DonorList />);

  expect(screen.getByTestId("post-loading")).toBeInTheDocument();

});
