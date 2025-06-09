import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import Box from '@mui/material/Box';
import Card from '~/pages/Boards/BoardContent/ListColumns/Column/ListCards/Card/Card';

const ListCards = ({ cards }) => {
  return (
    <SortableContext
      items={cards?.map((c) => c._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          p: '5px',
          m: '0 5px',
          overflowY: 'auto',
          overflowX: 'hidden',
          maxHeight: (theme) =>
            `calc(calc(100vh - ${theme.trello.appBarHeight} - ${
              theme.trello.boardBarHeight
            }) - ${theme.spacing(5)} - 50px - 56px)`,
          '&::-webkit-scrollbar': {
            width: '5px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '' : '#006A71'
          }
        }}
      >
        {cards?.map((card) => (
          <Card
            key={card._id}
            card={card}
          />
        ))}
      </Box>
    </SortableContext>
  );
};

export default ListCards;
