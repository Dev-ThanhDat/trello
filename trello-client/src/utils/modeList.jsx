import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export const modeList = [
  {
    value: 'light',
    icon: <LightModeIcon fontSize='small' />,
    label: 'Light'
  },
  {
    value: 'dark',
    icon: <DarkModeIcon fontSize='small' />,
    label: 'Dark'
  },
  {
    value: 'system',
    icon: <SettingsBrightnessIcon fontSize='small' />,
    label: 'System'
  }
];
