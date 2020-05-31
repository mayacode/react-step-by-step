import React from 'react';
import { useUserFetch } from "./hooks";

export function UserAccount() {
  const { data } = useUserFetch();
  return (
    <div>UserAccount</div>
  );
}

UserAccount.displayName = 'UserAccount';
UserAccount.propTypes = {};

export default UserAccount;
