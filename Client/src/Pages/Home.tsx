import { Box } from '@mui/system';
import BackGround from '../assets/travelmateBG.png';
import Navbar from '../Components/Navbar.tsx';
import TicketBooking from '../Components/TicketBooking.tsx';

type Props = {}

export default function Home({}: Props) {
  return (
    <Box>
      <Navbar/>
        <Box>
          <img src={BackGround} alt='BackgroundImage' style={{width: 1505, height: 619}}/>
        </Box>
        {/* <Box sx={{ position: 'relative', width: 1505, height: 619 }}>
          <img
            src={BackGround}
            alt='BackgroundImage'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust 0.4 for more/less fade
              zIndex: 1,
            }}
          />
        </Box> */}

        <Box>
          <TicketBooking/>
        </Box>
    </Box>
  )
}