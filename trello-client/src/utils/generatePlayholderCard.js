export const generatePlayholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  };
};
