import { useContext } from 'react';
import avatar from '../../../assets/image/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {

    const {user} = useContext(AuthContext);
    return (
        <div>
            <img src={user && user.photoURL ? user.photoURL : avatar} className='rounded-full' height='30' width='30' alt="Profile"  />
        </div>
    );
};

export default Avatar;