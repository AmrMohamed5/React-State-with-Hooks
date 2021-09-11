import React, {  useEffect, useState } from 'react';
import myImage from './amr.jpg';

const Profile = (props) => {
    const [data , setData] = useState ({fullName : 'Amr' , bio : 'Web', profession:'front'})
    useEffect(() => {props.reset()},[])
    return ( 
        <div>
        <img style={{width:'20%'}} src={myImage} alt ='myImage' />
       <h1>{data.fullName}</h1>
       <h3>{data.bio}</h3>
       <h5>{data.profession}</h5>
    </div>
     );
}
 
export default Profile;