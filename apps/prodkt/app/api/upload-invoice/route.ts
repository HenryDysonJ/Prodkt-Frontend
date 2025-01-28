// // api.js
import { httpRequest } from '@core/utils';
import axios from 'axios';
// import { envConfig } from '@core/envconfig';
const API_BASE_URL = process.env.API_BASE_URL;

// export const UploadFiles = async (files: any) => {
//     if (!files?.length > 0) {
//         return
//     }
//     let response = [];
//     for (const iterator of files) {

//         const formData = new FormData();
//         formData.append('file', iterator);
//         const res = await httpRequest('POST', `${API_BASE_URL}/file_storage/upload_files`, formData, true);
//         response.push(res?.data?.data?.[0]?.url)
//     }
//     return response
// };

export const UploadFiles = async (files: any) => {
    if (!(files?.length > 0)) {
        return [];
    }
    try {
        let responseUrls = [];
        for (const file of files) {
        
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(`${API_BASE_URL}/file_storage/upload_files`, formData, {
            });

            if (response && response.data && response.data.data && response.data.data.length > 0) {
                responseUrls.push(response.data.data[0].url);
            }
        }
        return responseUrls;
    } catch (error) {
        console.error('Error uploading files:', error);
        throw error; // Rethrow the error for the calling code to handle
    }
};

export async function uploadInvoiceDocument(invoiceData: any) {

    let url: any[] | undefined = [];
    if (invoiceData?.length > 0) {
        
        url = await UploadFiles(invoiceData);
    }
    const res = await fetch(`${API_BASE_URL}/landing_page/upload_invoice`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            url: url ?? '',
            document_type: 'invoice'
        }),
    })
    const data = await res.json()
    return data;
}
export async function GetOtp(mobileNumber: string) {

    const res = await fetch(`${API_BASE_URL}/auth/send_otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mobile_no: mobileNumber ?? '',
            mobile_no_std_code: 91
        }),
    })
    const data = await res.json()
    return data;
}

export async function getResendOtp(mobileNumber: string) {

    const res = await fetch(`${API_BASE_URL}/auth/resend_otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mobile_no: mobileNumber ?? '',
            mobile_no_std_code: 91
        }),
    })
    const data = await res.json()
    return data;
}

export async function SubmitApi(otp: string, mobile_no: string, productDetails: any) {

    productDetails.data.product_details['date_of_purchase'] = productDetails?.data?.product_details?.purchase_date;

    productDetails.data.product_details['location_latitude'] = 0;
    productDetails.data.product_details['location_longitude'] = 0;

    const res = await fetch(`${API_BASE_URL}/landing_page/register_user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            otp: otp,
            mobile_no: Number(mobile_no),
            product_details: productDetails?.data?.product_details,
            standard_warranty_details: productDetails?.data?.standard_warranty_details
        }),
    })
    const data = await res.json()
    return data;
}

