import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled(props) {
  const { page, handleChange, count } = props;

  return (
    <>
    <Stack sx={{alignItems:'center'}} spacing={2}>
      <Typography sx={{color: 'grey'}}>Page: {page}</Typography>
      <Pagination  count={count} page={page} onChange={handleChange} />
    </Stack>
    </>
    
  );
}
