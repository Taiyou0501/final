import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faBars, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const UserPhoto = () => {

    return (
        <body className="user-body">
            <header class="user-header">
                <div class="text">E-REPORT</div>
            </header>
            <header class="header-tab">
                <button class="menu-btn" href="">
                <FontAwesomeIcon icon={faBars} className="icon"/>
                </button>
            <div>
                <button class="profile-btn">
                <FontAwesomeIcon icon={faUser} className="icon"/>
                </button>
                <button class="logout-btn" onClick={() => window.location.href = "login"}>
                <FontAwesomeIcon icon={faPowerOff} className="icon"/>
                </button>
            </div>
            </header>
            <div class="user-container">
                <div class="camera-container">
                    
                
                </div>
            </div>
    </body>
    );
};
export default UserPhoto;