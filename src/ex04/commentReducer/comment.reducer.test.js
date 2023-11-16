import commentReducer from "./comment.reducer";

describe("comment reducer", () => {
  it("should add new comment", () => {
    const initialState = {
      comments: [],
    };
    const action = {
      type: "ADD_COMMENT",
      payload: { id: 1, text: "Hello", votesCount: 0, replies: [] },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [{ id: 1, text: "Hello", votesCount: 0, replies: [] }],
    });
  });
  it("should remove comment", () => {
    const initialState = {
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 0, replies: [] },
      ],
    };
    const action = {
      type: "REMOVE_COMMENT",
      payload: { id: 1, text: "Hello", votesCount: 0, replies: [] },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [{ id: 2, text: "World", votesCount: 0, replies: [] }],
    });
  });
  it("should increase upvote count by 1 ", () => {
    const initialState = {
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 0, replies: [] },
      ],
    };
    const action = {
      type: "UPVOTE_COMMENT",
      payload: { commentId: 2 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 1, replies: [] },
      ],
    });
  });
  it("should decrease upvote count by 1", () => {
    const initialState = {
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 2, replies: [] },
      ],
    };
    const action = {
      type: "DOWNVOTE_COMMENT",
      payload: { commentId: 2 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 1, replies: [] },
      ],
    });
  });
  it("should add reply to the comment", () => {
    const initialState = {
      comments: [
        { id: 1, text: "Hello", votesCount: 0, replies: [] },
        { id: 2, text: "World", votesCount: 2, replies: [] },
      ],
    };
    const action = {
      type: "ADD_REPLY",
      payload: { commentId: 1, reply: { id: 1, text: "Hii" } },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "Hello",
          votesCount: 0,
          replies: [{ id: 1, text: "Hii" }],
        },
        { id: 2, text: "World", votesCount: 2, replies: [] },
      ],
    });
  });
  it("should remove reply from the comment ", () => {
    const initialState = {
      comments: [
        {
          id: 1,
          text: "Hello",
          votesCount: 0,
          replies: [{ id: 1, reply: "Hii" }],
        },
        { id: 2, text: "World", votesCount: 1, replies: [] },
      ],
    };
    const action = {
      type: "REMOVE_REPLY",
      payload: { commentId: 1, replyId: 1 },
    };
    const updatedState = commentReducer(initialState, action);
    expect(updatedState).toEqual({
      comments: [
        {
          id: 1,
          text: "Hello",
          votesCount: 0,
          replies: [],
        },
        { id: 2, text: "World", votesCount: 1, replies: [] },
      ],
    });
  });
});
