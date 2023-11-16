const initialState = {
  comments: [],
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "REMOVE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.id
        ),
      };
    case "UPVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? { ...comment, votesCount: comment.votesCount + 1 }
            : comment
        ),
      };
    case "DOWNVOTE_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) =>
          comment.id === action.payload.commentId
            ? { ...comment, votesCount: comment.votesCount - 1 }
            : comment
        ),
      };
    case "ADD_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          return comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: [...comment.replies, action.payload.reply],
              }
            : comment;
        }),
      };
    case "REMOVE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          return comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply.id !== action.payload.replyId
                ),
              }
            : comment;
        }),
      };
    default:
      return { ...state };
      break;
  }
}

export default commentReducer;
