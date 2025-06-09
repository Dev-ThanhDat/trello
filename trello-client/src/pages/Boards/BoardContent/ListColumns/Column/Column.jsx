import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ListCards from '~/pages/Boards/BoardContent/ListColumns/Column/ListCards/ListCards';
import { mapOrder } from '~/utils/mapOrder';

const Column = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } });
  const dndKitColumnStyles = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const orderedColumns = mapOrder(column?.cards, column?.cardOrderIds, '_id');

  return (
    <div
      ref={setNodeRef}
      style={dndKitColumnStyles}
      {...attributes}
    >
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          height: 'fit-content',
          maxHeight: (theme) =>
            `calc(calc(100vh - ${theme.trello.appBarHeight} - ${
              theme.trello.boardBarHeight
            }) - ${theme.spacing(5)})`,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box
          sx={{
            height: '50px',
            display: 'flex',
            p: 2,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant='h6'
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {column?.title}
          </Typography>

          <Box>
            <Tooltip>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ p: 0 }}
                aria-controls={open ? 'option-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreHorizIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id='option-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <AddBoxIcon fontSize='small' />
                </ListItemIcon>
                Add new card
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DeleteIcon fontSize='small' />
                </ListItemIcon>
                Remove this column
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <ListCards cards={orderedColumns} />

        <Box
          sx={{
            height: '56px',
            display: 'flex',
            p: 2,
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button
            size='small'
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? '#fff' : '#102E50'
            }}
            startIcon={<AddBoxIcon />}
          >
            Add new card
          </Button>
          <Tooltip
            title='Drag to move'
            arrow
          >
            <DragHandleIcon
              fontSize='small'
              sx={{ cursor: 'pointer' }}
            />
          </Tooltip>
        </Box>
      </Box>
    </div>
  );
};

export default Column;
