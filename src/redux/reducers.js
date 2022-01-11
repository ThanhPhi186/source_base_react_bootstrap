// @flow
import { combineReducers } from 'redux';

import Auth from './auth/reducers';
import Product from './product/reducers';
import Layout from './layout/reducers';

export default (combineReducers({
    Auth,
    Product,
    Layout,
}): any);
