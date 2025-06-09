import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable';
import QueueIcon from '@mui/icons-material/Queue';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Column from '~/pages/Boards/BoardContent/ListColumns/Column/Column';

const ListColumns = ({ columns }) => {
  return (
    <SortableContext
      items={columns?.map((c) => c._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowY: 'hidden',
          overflowX: 'auto',
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '' : '#006A71'
          },
          '&::-webkit-scrollbar-track': {
            m: 2
          }
        }}
      >
        {columns?.map((column) => (
          <Column
            key={column._id}
            column={column}
          />
        ))}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            size='small'
            sx={{
              color: 'white',
              width: '100%'
            }}
            startIcon={<QueueIcon />}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

export default ListColumns;
