import { Box , Button  } from "@mui/material"
import { getSharedById  } from "../../../actions/shared"
import  CoffeCard from "../../../components/CoffeCard"

const DetailedCoffee = async ({ params } : any ) => {
    const coffeeId = params.coffeId.toString();
    const coffee = await getSharedById(coffeeId);
  
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
        p: 2,
      }}>
        <CoffeCard coffee={coffee} />
        <Button  href='/all-coffes' size="medium" variant="contained" color="warning">  All coffes  </Button>
      </Box>
    );
  };
  
  export default DetailedCoffee;
  
