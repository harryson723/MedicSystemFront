import React, { useState } from "react";

const UserContext = React.createContext();

const UserProvier = ({ children }) => {
    const [user, setUser] = useState({
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwOTA3MDE5NiwiZXhwIjoxNzA5MTU2NTk2fQ.1KHJFl_z9wVuDGSmqYXWVb4w9VkfYw7PitcpIObYLdg'
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

