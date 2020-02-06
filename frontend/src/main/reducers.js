import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';
import ProductReducer from '../product/productReducer';
import ClientReducer from '../client/clientReducer';
import SelectReducer from '../common/widget/select/selectReducer';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  product: ProductReducer,
  client: ClientReducer,
  form: formReducer,
  toastr: toastrReducer,
  select: SelectReducer
});

export default rootReducer;