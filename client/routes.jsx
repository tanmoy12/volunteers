import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout';
import {Layout} from './layouts/Layout';
import App from '../imports/ui/App';
import Dashboard from '../imports/ui/Dashboard';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});
FlowRouter.route('/home', {
    action(){
        mount(MainLayout, {
            content: (<App />)
        })
    }
});
FlowRouter.route('/dashboard',{
    name:'Dashboard',
    action:function () {
        mount(Layout,{
            content: (<Dashboard/>)
        })
    }
});