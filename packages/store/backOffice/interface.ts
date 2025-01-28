import { enqueueSnackbar } from "notistack";


export interface SignUpDetails {
    emailId: string;
    password: string;
    error: {
        emailId: string;
        password: string;
    }
}

export interface EmailState {
    sendEmailId: string;
    error: {
        sendEmailId: string;
    }
}

export interface ResetState {
    newPassword: string;
    confirmPassword: string;
    error: {
        newPassword: string;
        confirmPassword: string;
    }
}

export interface SignUp {
    signUpState: SignUpDetails;
    emailState: EmailState;
    resetState: ResetState;
    emailLoading: boolean;
    signUpLoading: boolean;
    resetLoading: boolean;
    refreshLoading: boolean;
    clearSignUpState: () => void;
    clearEmailState: () => void;
    clearResetState: () => void;
    refreshToken: () => void;
    handleChangeSignUp: (key: string, val: string) => void;
    handleChangeSendEmail: (key: string, val: string) => void;
    handleChangeReset: (key: string, val: string) => void;
    handleClickSignUp: (callback?: any) => void;
    sendEmail: (callback?: any) => void;
    resetPasswordSend: (token?: string | null, callback?: any) => void;
}



// Checking email
const ValidateEmail = (email: string) => {
    const isUpper = Boolean(/[A-Z]/.test(email));
    if (isUpper) {
        return false;
    }
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return Boolean(re.test(email.trim()));
};

export const validateSendEmail = (values: EmailState) => {
    let isValid = true;
    const error = values.error

    if (values?.sendEmailId.length > 0) {
        if (!ValidateEmail(values?.sendEmailId)) {
            isValid = false;
            error.sendEmailId = 'Please enter the valid mail';
        } else {
            error.sendEmailId = '';
        }
    } else {
        isValid = false;
        error.sendEmailId = 'Please enter the mail';
    }
    return { isValid, error };

}


export const validateSignUpData = (values: SignUpDetails) => {
    let isValid = true;
    const error = values.error;
    const hasMinimumLength = values.password.length >= 8;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(values.password);

    //  Checking username
    if (values.password.length > 0) {
        if (!hasMinimumLength) {
            isValid = false
            error.password = 'Password must be at least 8 characters long.';
        } else if (!hasSpecialCharacter) {
            isValid = false
            error.password = 'Password must contain at least one special character.';
        } else {
            error.password = '';
        }

    } else {
        isValid = false;
        error.password = 'Please enter the Password';
    }



    if (values?.emailId?.length > 0) {
        if (!ValidateEmail(values?.emailId)) {
            isValid = false;
            error.emailId = 'Please enter the valid mail';
        } else {
            error.emailId = '';
        }
    } else {
        isValid = false;
        error.emailId = 'Please enter the mail';
    }

    return { isValid, error };
}

export const validationReset = (values: ResetState) => {
    let isValid = true;
    const error = values.error;
    const hasMinimumLength = values.newPassword.length >= 8;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(values.newPassword);

    //  Checking password
    if (values.newPassword.length > 0) {
        if (!hasMinimumLength) {
            isValid = false
            error.newPassword = 'Password must be at least 8 characters long.';
        } else if (!hasSpecialCharacter) {
            isValid = false
            error.newPassword = 'Password must contain at least one special character.';
        } else {
            error.newPassword = '';
        }
    } else {
        isValid = false;
        error.newPassword = 'Enter a valid password';
    }

    if (values.confirmPassword.length === 0) {
        isValid = false;
        error.confirmPassword = 'Enter a valid password';
    } else {
        error.confirmPassword = '';
    }
    if (values.newPassword !== values.confirmPassword) {
        isValid = false
        enqueueSnackbar('password do not match', {
            variant: 'error',
        });
    }

    return { isValid, error };
}

export interface listingPayload {
    filter?: {
        id: string,
        brand_name: string
    },
    search? : string,
    offset?: string | number;
    limit?: string | number
}
// editor user details validation

export const editorUserValidate = (value: EditorUserDetails) => {
    const error = value.error;
    let isValid = true;
    if (!value?.user_name) {
        isValid = false;
        error.user_name = 'user_name required';
    } else {
        error.user_name = ''
    }
    if (!value?.phone_number) {
        isValid = false;
        error.phone_number = 'phone_no required';
    } else {
        error.phone_number = ''
    }
    if (value?.email_id.length > 0) {
        if (!ValidateEmail(value?.email_id)) {
            isValid = false;
            error.email_id = 'Please enter the valid mail';
        } else {
            error.email_id = '';
        }
    } else {
        isValid = false;
        error.email_id = 'Please enter the mail';
    }
    // if (!value?.email_id) {
    //   isValid = false;
    //   error.email_id = 'email_id required';
    // } else {
    //     error.email_id = ''
    // }
    return { isValid, error };
};


export interface userProductsInterface {
    icon?: React.ReactElement | null,
    productTitle?: string,
    modelNo?: string,
    serialNo?: string,
    purchaseDate?: string,
    modeofPurchase?: string,
}

export interface ProductsInterface {
    date_of_purchase?: string;
    image?: string;
    mode_of_purchase?: string;
    model_no?: string;
    product_id?: string;
    product_name?: string;
    serial_no?: string
}

export interface TableDataListInterface {
    email_id?: string;
    is_blocked?: boolean;
    phone_number?: string;
    products?: ProductsInterface[];
    s_no?: null | string;
    id?: null | string;
    user_id?: string;
    user_name?: string;
    user_products_count?: null | string;
}

export interface InsightsDataInterface {
    count: string | null;
    icon: string;
    name: string;
}

export interface EditorUserDetails {
    email_id: string;
    phone_number: string | null;
    user_id?: string;
    user_name?: string;
    error: {
        email_id: string;
        phone_number: string | null;
        user_id?: string;
        user_name?: string;
    }
}
export interface UserInterface {
    userProducts: userProductsInterface;
    inSightsLoading: boolean;
    isTableDataLoading: boolean;
    updateUserDetailsLoading: boolean;
    userInsights: (callback?: any) => void;
    updateUserDetails: (callback?: any) => void;
    userBlockApiCall: (data: any) => void;
    tableDataListingCall: (search?: string) => void;
    handleChangeFilter: (key: string, val: string) => void;
    handleChangeEditUser: (key: string, val: string, limit?:number) => void;
    setUserEditDetails: (value: EditorUserDetails) => void;
    handleChangePage:(event:React.MouseEvent<HTMLButtonElement> | null, newPage:number) => void;
    handleChangeRowsPerPage:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    tableDataList: TableDataListInterface[];
    userInsightsData: InsightsDataInterface[];
    userProductCount: string[];
    filterData: string;
    editorUserData: EditorUserDetails;
    page:number;
    rowPerPage:number;
    tableCount:number | null;
}