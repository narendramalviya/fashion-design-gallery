import React, { Component } from 'react';
import Photos from './Photos/Photos';

class Admin extends Component {
    render() {
        return (
            <div>
               <h1 className="bg-info m-2" >WEL-COME ADMIN</h1>
               <Photos/> 
            </div>
        );
    }
}

export default Admin;