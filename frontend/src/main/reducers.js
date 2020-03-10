import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import ProductReducer from '../product/productReducer';
import ClientReducer from '../client/clientReducer';
import SelectReducer from '../common/widget/select/selectReducer';
import LoginReducer from '../login/loginReducer';
import AuthReducer from '../auth/authReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  product: ProductReducer,
  client: ClientReducer,
  form: formReducer,
  toastr: toastrReducer,
  select: SelectReducer,
  login: LoginReducer,
  auth: AuthReducer
});

export default rootReducer;