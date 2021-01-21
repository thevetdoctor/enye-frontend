import React from 'react';
import { 
    FaEnvelope, 
    FaMobileAlt, 
    FaMale, 
    FaFemale, 
    FaUser,
    FaCreditCard,
    FaCcAmazonPay,
    FaGenderless} from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import { MdAccessTime, MdComputer, MdHttp } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import Moment from 'react-moment';


export default function Profile({profile}) {
    // console.log(profile);
    return (
        <div
        className='profile__div'
        >
            {/* <span>{ + 1}</span> */}
            <span>
                {profile.Gender === 'Male' ? <FaMale size='1em' /> : (profile.Gender === 'Female') ? <FaFemale size='1em' /> :   <FaGenderless />}: {profile.FirstName} {profile.LastName}
            </span>
            <span>
                <FaUser />:   {profile.UserName}
            </span>
            <span>
                <SiWebmoney />:   {profile.DomainName}
            </span> 
            <span>
                <FaEnvelope />:    {profile.Email}
            </span>
            <span>
                <BiWorld />: <span>Lat: {profile.Latitude.toFixed(2)}, Long: {profile.Longitude.toFixed(2)}</span>
            </span>
            <span>
                <MdHttp />: <span>{profile.URL}</span>
            </span>
            <span>
                <MdComputer />: {profile.MacAddress}
            </span>
            <span>
                <FaMobileAlt />: {profile.PhoneNumber}
                </span>
            <span>
                <FaCcAmazonPay />: {profile.PaymentMethod}
            </span>
            <span>
                <FaCreditCard />: {profile.CreditCardType}
            </span>
            <span>
                <MdAccessTime />: 
                    <Moment fromNow>
                        {profile.LastLogin}
                    </Moment>
            </span>       
        </div>
    )
}
