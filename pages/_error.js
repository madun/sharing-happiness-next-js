import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => {
    <div>
        <h1>Oops, Something went wrong!!</h1>
        <p>Try <Link href="/.."><a>Going back</a></Link></p>
    </div>
}