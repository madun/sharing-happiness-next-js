import React from 'react';
import {useRouter} from 'next/router';

const DynamicPage = () => {
    const router = useRouter();
    const {title} = router.query;
    // alert(title);
    return (
        <div>
           <h1>{title}</h1>     
        </div>
    )
}

export default DynamicPage;