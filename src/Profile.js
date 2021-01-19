import React from 'react'

export default function Profile({profile}) {
    // console.log(profile);
    return (
        <div
        className='profile__div'
        >
            {/* <span>{ + 1}</span> */}
            <span>
                Name: {profile.FirstName} {profile.LastName}
            </span>
            <span>
                Username: {profile.UserName}
            </span>
            <span>
                Gender: {profile.Gender}
            </span>
            <span>
                Domain: {profile.DomainName}
            </span> 
            <span>
                Email: {profile.Email}
            </span>
            <span>
                Location: Lat: {profile.Latitude}, Long: {profile.Longitude}
            </span>
            <span>
                URL: {profile.URL}
            </span>
            <span>
                Mac Address: {profile.MacAddress}
            </span>
            <span>
                Mobile: {profile.PhoneNumber}
                </span>
            <span>
                Payment Method: {profile.PaymentMethod}
            </span>
            <span>
                Card Type: {profile.CreditCardType}
            </span>
            <span>
                Last Login: {profile.LastLogin}
            </span>       
        </div>
    )
}
