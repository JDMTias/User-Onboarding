import React from 'react'
function User({ details }) {
    if (!details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
    }
    return (
        <div className='friend-container'>
            <div className='friend-card'>
                {console.log(details)}
    <h2>Name: {details.first_name} {details.personName}</h2>
                <p>Email: {details.email}</p>
            </div>
        </div>
    )
}
export default User