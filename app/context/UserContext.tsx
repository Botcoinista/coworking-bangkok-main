// "use client";

// import {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   PropsWithChildren,
// } from "react";
// import { SafeUser } from "../types";

// interface State {
//   user: SafeUser | null;
//   userLoading: boolean;

//   getUser: () => void;
// }

// const defaultState: State = {
//   user: null,
//   userLoading: false,
//   getUser: () => {},
// };

// const UserContext = createContext<State>(defaultState);

// const UserProvider = ({ children, prismaUser }: PropsWithChildren<{prismaUser: any}>) => {
//   const [user, setUser] = useState(defaultState.user);
//   const [userLoading, setUserLoading] = useState(defaultState.userLoading);

//   useEffect(() => {
//     setUser(prismaUser)
//   },[prismaUser])
//   console.log("USER", user)
//     onSuccess = () => {},
//     onError = () => {}
//   ) => {
//     //TODO
//   };

//   const getUser = async () => {
    
//   };

// turn (
//     <UserContext.Provider
//       value={{
//         user,
//         userLoading,
//         getUser,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// const useUser = () => {
//   const user = useContext(UserContext);
//   return user;
// };

// export { UserProvider, useUser };
