import { Button } from '@mui/material'
import '../team/showteam.css'
import { useNavigate } from 'react-router-dom'
export default function ShowTeam (){
    const name=localStorage.getItem('name')
    const teamname=localStorage.getItem('teamname')
    const domain=localStorage.getItem('domain')
    const avail=localStorage.getItem('availability')
    const navigate=useNavigate()
    return(
        <div className="show-div-main">
            <div className='show-createtext'>Created Teams :</div>
              <div className='show-details-cont'> 
                <div className='show-details-cont1'>
                    <div className='show-text'>Team Name: {teamname}</div>
                    <div className='show-text'>Member name: {name}</div>
                    <div className='show-text'>Availability: {avail}</div>
                    <div className='show-text-last'>Domain: {domain}</div>
                </div>
                
                
              </div>
              <div style={{display:'flex',justifyContent:'center'}}>
              <Button onClick={()=>navigate('/')} variant='contained' style={{marginTop:'17%'}}>Go To home</Button>
              </div>
        </div>
    )
}