import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');

axios.interceptors.request.use(config => {
   config.headers.authorization = token;
   return config;
}, function (error) {
   return Promise.reject(error)
})

export default function(Component) {
   return class Authenticated extends React.Component {
       render() {
        //    const notLoggedIn = this.props.history.push('/');

           return (
                <div>{token ? <Component {...this.props} /> : this.props.history.push('/') }</div>
           );
       };
   }
}