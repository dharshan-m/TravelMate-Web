import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
type Props = {}

export default function TicketBooking({}: Props) {
  return (
    <Box>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
            From
            </InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            />
        </FormControl>
        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
            To
            </InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            }
            />
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
    </Box>
  )
}