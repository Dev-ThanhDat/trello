import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import { modeList } from '~/utils/modeList';

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl
      sx={{ minWidth: 125 }}
      size='small'
    >
      <Select
        value={mode}
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '.MuiSvgIcon-root': {
            color: 'white'
          }
        }}
      >
        {modeList?.map((item) => (
          <MenuItem
            key={item.value}
            value={item.value}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1
              }}
            >
              {item.icon} {item.label}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ModeSelect;
