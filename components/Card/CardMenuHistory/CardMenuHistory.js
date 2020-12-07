import React from 'react';

const cardMenuHistory = (props) => {
    return (
        <div className="container rounded-2xl shadow-lg">
            <div className="flex">
                <div className="rounded-2xl p-2 mt-4 ml-4 mb-4 mr-2">
                    <img src={props.icon}></img>
                </div>
                <div className="ml-5  m-2">
                    <div className="text-2lg font-bold text-blue-primary">
                        {props.title}
                    </div>
                    <div>
                        {props.subtitle}
                    </div>
                </div>                  
            </div>
        </div>
    );
}

cardMenuHistory.defaultProps = {
    title: 'default title',
    subtitle: 'default sub'
}

export default cardMenuHistory;