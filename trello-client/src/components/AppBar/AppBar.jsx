import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import TrelloIcon from '~/assets/icons/trello.svg?react';
import Profiles from '~/components/AppBar/Menus/Profiles';
import ModeSelect from '~/components/ModeSelect/ModeSelect';

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#1b263b' : '#006A71'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: 'white' }}
            fontSize='small'
          />

          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white'
            }}
          >
            Trello
          </Typography>
        </Box>

        <Button
          variant='outlined'
          startIcon={<LibraryAddIcon />}
          sx={{ color: 'white', border: 'none' }}
        >
          Create
        </Button>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <TextField
            id={'outline-search'}
            placeholder='Search...'
            type='text'
            size='small'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                )
              }
            }}
            sx={{
              minWidth: 180,
              '& input': {
                color: 'white'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              }
            }}
          />
          <ModeSelect />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <Tooltip
            title='Notifications'
            arrow
          >
            <Badge
              color='warning'
              variant='dot'
              sx={{ cursor: 'pointer' }}
            >
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>

          <Tooltip
            title='Help'
            arrow
          >
            <Badge
              color='secondary'
              sx={{ cursor: 'pointer' }}
            >
              <HelpOutlineIcon sx={{ color: 'white' }} />
            </Badge>
          </Tooltip>

          <Profiles />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
