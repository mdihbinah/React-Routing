import React, { use } from 'react';


const Users2 = ({usersPromise}) => {
    console.log(usersPromise);
    const data = use(usersPromise)
    console.log(data);
    return (
        <div>
            <h1>Hello users 2</h1>
        </div>
    );
};

export default Users2;