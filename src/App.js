
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Index from './components//client/Index'
import IndexDashboard from './components/dashboard/Index';
import Register from './components/client/Register';
import Login from './components/client/Login';
import AdditionalDetails from './components/client/AdditionalDetails';
import Home from './components/client/Home';
import Products from './components/dashboard/Products';
import Users from './components/dashboard/Users';
import CreateProduct from './components/dashboard/CreateProduct';
import ViewDetails from './components/client/ViewDetails';
import Orders from './components/client/Orders';
import Profile from './components/client/Profile';
import Address from './components/client/Address';
import OrderPlaced from './components/client/OrderPlaced';
import Dorders from './components/dashboard/Orders';
import error from './error'

function App() {

  return (
    <div className="App">
     
     <Router>
       <Switch>
          {/* Client */}
         <Route exact path="/" component={Index}/>
         <Route exact path="/home" component={Home}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/register" component={Register}/>
         <Route exact path="/AdditionalDetails" component={AdditionalDetails}/>
         <Route exact path="/viewDetails/:id" component={ViewDetails}/>
         <Route exact path="/orders" component={Orders}/>
         <Route exact path="/profile" component={Profile}/>
         <Route exact path="/address/:id" component={Address}/>
         <Route exact path="/success" component={OrderPlaced}/>
         <Route error component={error}/>
        

         {/* Dashboard */}
         <Route exact path="/dashboard" component={IndexDashboard}/>
         <Route exact path="/dashboard/products" component={Products}/>
         <Route exact path="/dashboard/users" component={Users}/>
         <Route exact path="/dashboard/orders" component={Dorders}/>
         <Route exact path="/dashboard/product/create" component={CreateProduct}/>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
