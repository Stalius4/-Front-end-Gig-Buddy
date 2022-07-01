import React from 'react';
// import '../index.css'
import './profile.css'

const Profile = () => {
return (
    <>
    <div className='profile-page-container'>

        <section className='profile-page-top'>
            <div className='profile-picture-div'>
                <img className='profile-image' src='https://www.fillmurray.com/338/338' alt='profile' />
                <h1 className='text center'>Username</h1>
            </div>
            <div className='profile-buddies'>
                <h2 className='text2 buddies-header'>Buddies</h2>
                <div className='buddy-images'>
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy1' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy2' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy3' />
                    <img className='buddy-image' src='https://www.fillmurray.com/136/136' alt='buddy4' />
                    <p className='see-more-text'>See more...</p>
                </div>
            </div>
        </section>
        <section className="profile-page-bottom">
            <div className='profile-bio'>
                <h2 className='bio-header text2'>Profile</h2>
                <div className='bio-container'>
                    <p className='bio-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est dolor temporibus quos minima, sed consequatur! Accusantium facere, labore ipsam, quas voluptates sit provident minima expedita sapiente hic consequuntur voluptatem.</p>
                </div>
            </div>
            <div className='mygigs-div'>
                <h2 className='text2 mygigs-header'>My Gigs</h2>
                <div className="gig-images">
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <img className="mygig-image" src="https://www.fillmurray.com/194/194" alt="gig" />
                <div className='gig-friend-image-group'>
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                <img className='gig-friend-image' src="https://www.fillmurray.com/36/36" alt="friend" />
                </div>
                <p className='see-more-text'>See more...</p>
                </div>
            </div>
        </section>
        </div>
</>
)
}

export default Profile;