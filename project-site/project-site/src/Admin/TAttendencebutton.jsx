import React from 'react'
import { Link } from 'react-router-dom'

export default function TAttendencebutton() {
  return (
    <div>
        <table style={{margin:'0 auto'}}>
            <thead>
            <tr>
                <td>  <button type="submit" className="btn btn-success ms-3"> Add Attendence</button> </td>
                <td>  <button type="submit"className="btn btn-success ms-2">Update Attendence </button> </td>
                <td>  <Link to="/Admin-Dashboard/view-all-attendences" ><button type="submit" className="btn btn-success ms-2">Get Attendence</button> </Link></td>
                
                
            </tr>
            </thead>
        </table>
      
    </div>
  )
}
