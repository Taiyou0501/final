import './UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot, faBars, faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const UserDashboard = () => {

    return (
        <body class="index-user-body">

    <header class="index-user-header">
        <div class="index-main-text">E-REPORT</div>
    </header>
    <header class="index-header-tab">
        <button class="index-menu-btn">
            <i class="bx bx-menu index-icon"></i>
            <span class="index-menu-text">HELLO, USER</span>
        </button>
        <div class="index-user-actions">
            <button class="index-profile-btn">
                <i class="bx bx-user index-icon"></i>
            </button>
            <button class="index-logout-btn" onClick={() => window.location.href = "login"}>
                <i class="bx bx-power-off index-icon"></i>
            </button>
        </div>
    </header>
    <div class="index-tabs-user">
        <div class="index-tab">
            <button class="index-report-btn" onClick={() => window.location.href = "login"}>
            </button>
            <div class="index-text-report">REPORT</div>
            <div class="index-subtext">IF THERE IS AN EMERGENCY PLEASE CLICK REPORT</div>
        </div>
    </div>
    <script src="script.js"></script>

</body>
    );
};
export default UserDashboard;