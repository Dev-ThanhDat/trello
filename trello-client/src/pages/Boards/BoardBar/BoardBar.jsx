import AddIcon from '@mui/icons-material/Add';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';

const BoardBar = ({ board }) => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#415a77' : '#48A6A7'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          sx={{
            border: 'none',
            color: 'white',
            paddingX: '5px',
            bgcolor: 'transparent',
            borderRadius: '4px',
            '.MuiSvgIcon-root': {
              color: 'white'
            }
          }}
        />
        <Chip
          icon={<VpnLockIcon />}
          label={board?.type}
          clickable
          sx={{
            border: 'none',
            color: 'white',
            paddingX: '5px',
            textTransform: 'capitalize',
            bgcolor: 'transparent',
            borderRadius: '4px',
            '.MuiSvgIcon-root': {
              color: 'white'
            }
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant='outlined'
          startIcon={<AddIcon />}
          sx={{ color: 'white', borderColor: 'white' }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={2}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip
            title='Remy Sharp'
            arrow
          >
            <Avatar
              alt='Remy Sharp'
              src='https://images.unsplash.com/photo-1743126642334-ab003ce665da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip
            title='Travis Howard'
            arrow
          >
            <Avatar
              alt='Travis Howard'
              src='https://images.unsplash.com/photo-1727557465879-57115bf9d0cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'
            />
          </Tooltip>
          <Tooltip
            title='Cindy Baker'
            arrow
          >
            <Avatar
              alt='Cindy Baker'
              src='https://images.unsplash.com/photo-1732282602521-0a80511c76c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
