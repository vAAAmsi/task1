import { useState,useEffect } from "react";
import Data from '../Data/Data.json'
import '../cards/cards.css'
import { Button, Pagination, TextField } from "@mui/material";



export default function DataAquring(){
    const [data,setData]=useState([]);
    const [page,setPage]=useState([]);
    const [searchname,setSearchname]=useState('');
    const[a,setA]=useState(false)
    const [domainFilter, setDomainFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [availabilityFilter, setAvailabilityFilter] = useState('');
    let tr=parseInt(true);
    let fa=parseInt(false);
    // console.log(tr)
    useEffect(()=>{
        setData(Data);
        setPage(Data.slice(0,20))
    },[])
   
    
    const Pagehandling= (e,value) =>{
        setPage(Data.slice((value*20)-20,value*20))
        console.log(page)
    }
    const selectDomainhandle=(e)=>{
        setDomainFilter(e.target.value)
    }
    const selectGender = (e)=>{
        setGenderFilter(e.target.value)
    }
    const selectAvailability = (e)=>{
        setAvailabilityFilter(e.target.value)
    }
    console.log(domainFilter,genderFilter,availabilityFilter)
    
    const filteredData = page.filter(item => {
        if(searchname && item.first_name !==searchname){
            const nameMatch = item.first_name.toLowerCase().includes(searchname.toLowerCase());
            return nameMatch;
        }
        if (domainFilter && item.domain !== domainFilter) {
          return false;
        }
        if (genderFilter && item.gender !== genderFilter) {
          return false;
        }
        if (availabilityFilter) {
          if (availabilityFilter === true && !item.isAvailable) {
            return false;
          }
          if (availabilityFilter === false && item.isAvailable) {
            return false;
          }
        }
        return true;
      });

    return(
        <div className="datapage-main-container">
            <div className="datapage-navbar">
                <div className="navbar-text">DATA</div>
            </div>
           <div className="search-div">
                <TextField onChange={(e)=>setSearchname(e.target.value)} value={searchname} style={{width:'70%'}} label='search'></TextField>
                <Button onClick={()=>setA(!a)} style={{backgroundColor:'red',color:'white'}}>Filters</Button>
           </div>
           {
            a?<div className="invisible-container">
                <select onChange={(e)=>selectDomainhandle(e)} className="domain-select-component">
                <option value="">domain</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
                <option value="UI Designing">UI Designing</option>
                <option value="Business Development">Business Development</option>
                </select>
                
                <select onChange={(e)=>selectGender(e)} name="domain" className="domain-select-component">
                        <option value="">Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </select>
                <select onChange={(e)=>selectAvailability(e)} name="availability" className="domain-select-component">
                    <option value="">Availability</option>
                    <option value="true">available</option>
                    <option value="false">not available</option>
                </select>
                    


            </div>:null
           }
           <div className="pagination-container">
                <Pagination onChange={Pagehandling} style={{marginTop:'3%',width:''}} 
                    count={50} variant="outlined" color="secondary">
                    
                </Pagination>
           </div>
            
            <div className="main-frame" >
                <div className="cards-container">
                {
                   
                    filteredData.map((mapdata,index)=>{
                        let Availability=mapdata.available.toString();
                        // console.log(Availability)
                        return(
                            <div className="main-items-holder" key={index}> 
                                <div className="items-holder">
                                        <div className="inner-texts">Full name : {`${mapdata.first_name}`+ `${mapdata.last_name}`}</div>
                                        <div className="inner-texts">Gender: {mapdata.gender}</div>
                                        <div className="inner-texts">Email: {mapdata.email}</div>
                                        <div className="inner-texts">Domain: {mapdata.domain}</div>
                                        <div className="inner-texts-last">Availability: {Availability}</div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
           
            
        </div>
    )
}
