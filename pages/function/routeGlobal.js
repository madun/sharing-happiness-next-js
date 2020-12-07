import Router from 'next/router';

export let goBack = () => Router.back();

export let goToSignIn = () => Router.push("/container/SignIn");

export let goToCampaigner = (props) => Router.push(`/container/Campaigner`);

export let goToHistory = () => Router.push("/container/History");