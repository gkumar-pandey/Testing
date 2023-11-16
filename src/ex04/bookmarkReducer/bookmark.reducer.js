const initialState = {
  bookmarks: [],
  filters: {},
};

function bookmarkReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case "REMOVE_BOOKMARK":
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload.id
        ),
      };
    case "UPDATE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) => {
          if (bookmark.id === action.payload.bookmarkId) {
            return {
              ...bookmark,
              tags: bookmark.tags.map((tag) =>
                tag.id === action.payload.updatedTag.id
                  ? { ...action.payload.updatedTag }
                  : tag
              ),
            };
          }
          return bookmark;
        }),
      };
    case "ADD_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? { ...bookmark, tags: [...bookmark.tags, action.payload.tag] }
            : bookmark
        ),
      };
    case "REMOVE_TAG":
      return {
        ...state,
        bookmarks: state.bookmarks.map((bookmark) =>
          bookmark.id === action.payload.bookmarkId
            ? {
                ...bookmark,
                tags: bookmark.tags.filter(
                  (tag) => tag.id !== action.payload.tagId
                ),
              }
            : bookmark
        ),
      };
    default:
      return { ...state };
      break;
  }
}

export default bookmarkReducer;
