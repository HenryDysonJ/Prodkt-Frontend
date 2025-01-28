import React from "react";
import { BothNavBars } from "../../HOC";
import UserManagement from "./user";

const UserManagementParent = BothNavBars(() => {
    return (
        <UserManagement />
    )
});
export default UserManagementParent