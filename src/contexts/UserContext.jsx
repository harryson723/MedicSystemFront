import React, { useState } from "react";

const UserContext = React.createContext();

const UserProvier = ({ children }) => {
    const [user, setUser] = useState({
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwODk2MTY0MywiZXhwIjoxNzA5MDQ4MDQzfQ.LXPbGX33JKzfAGuLM6j-xLEdiNzhmHJs2i5ijP5dTzs'
    });
    const data = {
        user,
        setUser,
    }

    return (
       <UserContext.Provider value={data}>
            {children}
       </UserContext.Provider>
    );
}

export { UserProvier };

export default UserContext;

