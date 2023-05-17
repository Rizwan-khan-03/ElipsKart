import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FilterSideBar from './FilterSideBar';
import MobileList from './List';
import { useDispatch } from 'react-redux';
import * as action from './Reduxx/MobileAction';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));
const FilterContainer = styled(Box)({
  height: "100vh",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.3em"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888"
  }
});

export default function Moblie() {
  const [mobileList,setMobileList]=useState([])
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(action.getMobileListRequest(getListOfAllMobile));
  }, [])
  const getListOfAllMobile = async (callbackdata:any) => {
    try {
      setMobileList(callbackdata?.payload)
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <Box sx={{ flexGrow: 1, bgcolor: "#f1f2f6", height: '100vh', }}>
      <Grid container spacing={1}>
        <Grid item xs={3} md={2} >
          <FilterContainer>
            <FilterSideBar />
          </FilterContainer>
        </Grid>
        <Grid item xs={9} md={10}>
          <FilterContainer>
            {
              mobileList?.map((item, index) => (
                <Item key={index + 1} ><MobileList data={item}/></Item>
              ))
            }
          </FilterContainer>
        </Grid>
      </Grid>
    </Box>

  );
}
