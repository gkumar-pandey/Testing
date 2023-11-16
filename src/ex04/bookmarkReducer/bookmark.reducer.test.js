import bookmarkReducer from "./bookmark.reducer";

const initialState = {
  bookmarks: [{ id: 1, title: "Neogcamp", Url: "abc.com" }],
  filters: {},
};

describe("bookmarkReducer", () => {
  it("should add bookmark to the array of bookmarks", () => {
    const initialState = {
      bookmarks: [{ id: 1, title: "Neogcamp", Url: "abc.com", tags: [] }],
      filters: {},
    };
    const action = {
      type: "ADD_BOOKMARK",
      payload: { id: 2, title: "gautam kumar", Url: "gautam.com", tags: [] },
    };

    const updatedState = bookmarkReducer(initialState, action);

    expect(updatedState).toEqual({
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        { id: 2, title: "gautam kumar", Url: "gautam.com", tags: [] },
      ],
      filters: {},
    });
  });
  it("should remove bookmark from array of bookmarks", () => {
    const initialState = {
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        { id: 2, title: "gautam kumar", Url: "gautam.com", tags: [] },
      ],
      filters: {},
    };
    const action = {
      type: "REMOVE_BOOKMARK",
      payload: { id: 2, title: "gautam kumar", Url: "gautam.com", tags: [] },
    };

    const updatedState = bookmarkReducer(initialState, action);

    expect(updatedState).toEqual({
      bookmarks: [{ id: 1, title: "Neogcamp", Url: "abc.com", tags: [] }],
      filters: {},
    });
  });
  it("should update tags to the bookmark ", () => {
    const initialState = {
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "parsonal" }],
        },
      ],
      filters: {},
    };
    const action = {
      type: "UPDATE_TAG",
      payload: {
        bookmarkId: 2,
        updatedTag: { id: 1, tag: "portfolio" },
      },
    };

    const updatedState = bookmarkReducer(initialState, action);

    expect(updatedState).toEqual({
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "portfolio" }],
        },
      ],
      filters: {},
    });
  });
  it("should add tag to the bookmark ", () => {
    const initialState = {
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "portfolio" }],
        },
      ],
      filters: {},
    };
    const action = {
      type: "ADD_TAG",
      payload: {
        bookmarkId: 1,
        tag: { id: 1, tag: "learning" },
      },
    };

    const updatedState = bookmarkReducer(initialState, action);

    expect(updatedState).toEqual({
      bookmarks: [
        {
          id: 1,
          title: "Neogcamp",
          Url: "abc.com",
          tags: [{ id: 1, tag: "learning" }],
        },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "portfolio" }],
        },
      ],
      filters: {},
    });
  });
  it("should remove tag from bookmark tags ", () => {
    const initialState = {
      bookmarks: [
        {
          id: 1,
          title: "Neogcamp",
          Url: "abc.com",
          tags: [{ id: 1, tag: "learning" }],
        },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "portfolio" }],
        },
      ],
      filters: {},
    };
    const action = {
      type: "REMOVE_TAG",
      payload: {
        bookmarkId: 1,
        tagId: 1,
      },
    };

    const updatedState = bookmarkReducer(initialState, action);

    expect(updatedState).toEqual({
      bookmarks: [
        { id: 1, title: "Neogcamp", Url: "abc.com", tags: [] },
        {
          id: 2,
          title: "gautam kumar",
          Url: "gautam.com",
          tags: [{ id: 1, tag: "portfolio" }],
        },
      ],
      filters: {},
    });
  });
});
