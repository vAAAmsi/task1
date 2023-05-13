import { useNavigate } from "react-router-dom"
import '../team/teamcreation.css'
import { Button, TextField, Tooltip } from "@mui/material"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useState } from "react";
import Swal from "sweetalert2";
export default function TeamCreaction(){
    const [domain,setDomain]=useState('')
    const [name,setName]=useState('')
    const [teamname,setTeamname]=useState('')
    const [avail,setAvail]=useState('');
    let navigate=useNavigate();
    // console.log(domain,name)
    const SubmitHandler = (e) =>{
        e.preventDefault();
        localStorage.setItem('teamname',teamname)
        localStorage.setItem('name',name)
        localStorage.setItem('domain',domain)
        localStorage.setItem('availability',avail)
        Swal.fire(
            {
                title:'Team Created',
                icon:'success'
            }
        )
        navigate('/')
    }
    return(
        <div className="creation-main-container" >
            <div className="creationpage-navbar">
                <Tooltip title='back'>
                    <KeyboardBackspaceIcon onClick={()=>navigate('/')} style={{fontSize:'30px',color:'white',marginLeft:'15px',cursor:'pointer'}} >  
                    </KeyboardBackspaceIcon>
                </Tooltip>
                {/* <div></div> */}
                <div className="creation-text">TEAM CREATION</div>
                {/* <div className="invisible-div-teamcreation"></div> */}
                <Tooltip title='show created teams'>
                    <Button onClick={()=>navigate('/show-team')} variant="contained">Show</Button>
                </Tooltip>

                
            </div>
            
            <div className="main-form-container">
                
                <div className="form-container">
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <form onSubmit={SubmitHandler}>
                            <div className="form-text">Enter Team Details</div>
                            <TextField type="text" onChange={(e)=>setTeamname(e.target.value)} label='enter team name' required></TextField>
                            <div style={{marginTop:'20px'}} >
                                <TextField type="text" onChange={(e)=>setName(e.target.value)} label="enter name of the individual" required></TextField>
                            </div>
                            <div>
                            <select required onChange={(e)=>setDomain(e.target.value)} className="domain-stylings-form">
                                    <option value="">domain</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="IT">IT</option>
                                    <option value="Management">Management</option>
                                    <option value="UI Designing">UI Designing</option>
                                    <option value="Business Development">Business Development</option>
                                    </select>
                            </div>
                            <div>
                            <select onChange={(e)=>setAvail(e.target.value)} name="availability" className="domain-stylings-form">
                                <option value="">Availability</option>
                                <option value="true">available</option>
                                
                            </select>
                            <div className="form-button">
                                  <Button type="submit" style={{backgroundColor:'green',color:'white'}}>Create Team</Button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}