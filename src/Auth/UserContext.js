import  { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    login: () => {},
    signup: () => {},
    logout: () => {},
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const updateUser = (updatedUser) => {
        setCurrentUser((prevUser) => ({
            ...prevUser,
            ...updateUser,
        }));
    }

    return(
        <UserContext.Provider value={{currentUser, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}