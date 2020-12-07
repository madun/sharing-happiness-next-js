import React, { Component } from 'react';
import Fragment from '../../../components/hoc/Fragment';
import router from 'next/router';
import {useRouter} from 'next/router';

//pages
import GettingStarted from './../GettingStarted/GettingStarted';
import Campaigner from '../Campaigner';
import SignIn from '../SignIn';
import History from '../History';

class PagesRoute extends Component { 
    render () {
      return (
        <GettingStarted/>
      );
    }
  }
  

export default PagesRoute;