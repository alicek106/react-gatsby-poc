import React, { createContext, Dispatch, useContext, useReducer } from "react"

type userInfo = {
  userName: string;
  email: string;
}

// Action은 다음 중 하나를 가져야만 하는 것임
type Action =
  | { type: 'TEST_ACTION_1'; userInfo: userInfo}
  | { type: 'TEST_ACTION_2'; userInfo: userInfo}

export const UserDispatchContext = createContext<Dispatch<Action> | undefined>(undefined)
UserDispatchContext.displayName = 'UserDispatchContext'

export const UserStateContext = createContext<userInfo>({ userName: 'madoka', email: 'homura'})
UserStateContext.displayName = 'UserStateContext'

function userInfoReducer(state: userInfo, action: Action): userInfo {
  switch (action.type) {
    case 'TEST_ACTION_1':
      return state;
    case 'TEST_ACTION_2':
      return {
        ...state,
        userName: action.userInfo.userName,
        email: action.userInfo.email,
      }
  }
}

export function UserInfoContextProvider({ children }: { children: React.ReactNode; }) {
  const [userInfo, dispatch] = useReducer(userInfoReducer, { userName: 'user', email: 'email'})

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userInfo}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  )
}