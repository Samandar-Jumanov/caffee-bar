"use client"

import { Container  , Typography ,  Button } from "@mui/material"

const Error = () => {
       return (
      <Container sx={{
        textAlign: 'center', mt: '-2px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Typography>Something went wrong, please try again later.</Typography>
         <Button href='/all-coffes' color="warning" variant="contained">All coffees</Button>
       </Container>
       )
}

export default Error 