import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Dashboard from './Components/AdminAccount/Dashboard';
import Home from './Components/AdminAccount/Home';
import Report from './Components/AdminAccount/Report';
import Account from './Components/AdminAccount/Account';
import Profile from './Components/AdminAccount/Profile';
import UserDashboard from './Components/UserAccount/UserDashboard';
import CheckAccount from './Components/AdminAccount/CheckAccount';
import EditAccount from './Components/AdminAccount/EditAccount';
import CreateUnitAccount from './Components/AdminAccount/CreateUnitAccount';
import User1stpage from './Components/UserAccount/User1stpage';
import CreatePoliceAccount from './Components/AdminAccount/CreatePoliceAccount';
import UnitDashborad from './Components/UnitAccount/UnitDashboard';
import UnitHome from './Components/UnitAccount/UnitHome';
import UnitAccount from './Components/UnitAccount/UnitAccount';
import UnitProfile from './Components/UnitAccount/UnitProfile';
import UnitEditAccount from './Components/UnitAccount/UnitEditAccount';
import CheckResponderAccount from './Components/UnitAccount/CheckResponderAccount';
import CreateResponderAccount from './Components/UnitAccount/CreateResponderAccount';
import PoliceDashboard from './Components/PoliceAccount/PoliceDashboard';
import PoliceHome from './Components/PoliceAccount/PoliceHome';
import PoliceNotification from './Components/PoliceAccount/PoliceNotification';
import PoliceProfile from './Components/PoliceAccount/PoliceProfile';
import PoliceEditAccount from './Components/PoliceAccount/PoliceEditAccount';
import ResponderDashboard from './Components/ResponderAccount/ResponderDashboard';
import ResponderHome from './Components/ResponderAccount/ResponderHome';
import ResponderNotification from './Components/ResponderAccount/ResponderNotification';
import ResponderProfile from './Components/ResponderAccount/ResponderProfile';
import ResponderEditAccount from './Components/ResponderAccount/ResponderEditAccount';
import UserPhoto from './Components/UserAccount/UserPhoto';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element ={<LoginRegister />}/>
          <Route path="/login" element={<LoginRegister />}/>
          <Route path="/admin" element={<Dashboard />}/>
          <Route path="/admin-home" element={<Home />}/>
          <Route path="/admin-reports" element={<Report />}/>
          <Route path="/admin-accounts" element={<Account />}/>
          <Route path="/admin-profile" element={<Profile />}/>
          <Route path="/user" element={<UserDashboard />}/>
          <Route path="/admin-check-account" element={<CheckAccount />}/>
          <Route path="/edit-account" element={<EditAccount />}/>
          <Route path="/create-unit" element={<CreateUnitAccount />}/>
          <Route path="/user1stpage" element={<User1stpage />}/>
          <Route path="/create-police" element={<CreatePoliceAccount />}/>
          <Route path="/unit" element={<UnitDashborad />}/>
          <Route path="/unit-home" element={<UnitHome />}/>
          <Route path="/unit-accounts" element={<UnitAccount />}/>
          <Route path="/unit-profile" element={<UnitProfile />}/>
          <Route path="/unit-edit-account" element={<UnitEditAccount />}/>
          <Route path="/check-responder-account" element={<CheckResponderAccount />}/>
          <Route path="/create-responder-account" element={<CreateResponderAccount />}/>
          <Route path="/police" element={<PoliceDashboard />}/>
          <Route path="/police-home" element={<PoliceHome />}/>
          <Route path="/police-notification" element={<PoliceNotification />}/>
          <Route path="/police-profile" element={<PoliceProfile />}/>
          <Route path="/police-edit-account" element={<PoliceEditAccount />}/>
          <Route path="/responder" element={<ResponderDashboard />}/>
          <Route path="/responder-home" element={<ResponderHome />}/>
          <Route path="/responder-notification" element={<ResponderNotification />}/>
          <Route path="/responder-profile" element={<ResponderProfile />}/>
          <Route path="/responder-edit-account" element={<ResponderEditAccount />}/>
          <Route path="/user-photo" element={<UserPhoto />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
