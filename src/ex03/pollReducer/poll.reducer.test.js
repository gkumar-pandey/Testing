import pollReducer from "./poll.reducer";

describe("poll Reducer", () => {
  it("should add new poll object", () => {
    const intialState = {
      polls: [{ id: 1, question: "Are you ready for study?", options: [] }],
    };
    const action = {
      type: "CREATE_POLL",
      payload: { id: 2, question: "Are you ready for party?" },
    };
    const updatedState = pollReducer(intialState, action);

    expect(updatedState).toEqual({
      polls: [
        { id: 1, question: "Are you ready for study?", options: [] },
        { id: 2, question: "Are you ready for party?", options: [] },
      ],
    });
  });
  it("should add option to the options array", () => {
    const intialState = {
      polls: [{ id: 1, question: "Are you ready for study?", options: [] }],
    };
    const action = {
      type: "ADD_OPTION",
      payload: { pollId: 1, optionText: "i am ready for party" },
    };
    const updatedState = pollReducer(intialState, action);
    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Are you ready for study?",
          options: [{ text: "i am ready for party", votes: 0 }],
        },
      ],
    });
  });
  it("should increment vote count by 1", () => {
    const intialState = {
      polls: [
        {
          id: 1,
          question: "Are you ready for study?",
          options: [{ text: "i am ready for party", votes: 0 }],
        },
      ],
    };
    const action = {
      type: "VOTE",
      payload: { pollId: 1, optionText: "i am ready for party" },
    };
    const updatedState = pollReducer(intialState, action);
    expect(updatedState).toEqual({
      polls: [
        {
          id: 1,
          question: "Are you ready for study?",
          options: [{ text: "i am ready for party", votes: 1 }],
        },
      ],
    });
  });
});
