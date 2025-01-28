import {
  DocumentWithBgColorIcon,
  PrizeColorIcon,
  SheildColorIcon,
  ToolsColorIcon,
} from '@core/ui/atoms/icons/productSearchIconsLists';
import { create } from 'zustand';

import {
  AddProductDetailsInterface,
  DocumentInterface,
  ProductSummaryInterface,
  SummaryProductInterface,
  WarrantyData,
} from '../interface';

export const useProductSummary = create<ProductSummaryInterface>((set, get) => ({
  productSummary: [],
  warrantyInsuranceAmcData: [],
  documentData: [],

  genProductSummary: (addProductDetails: AddProductDetailsInterface) => {
    let newWarrantyInsuranceAmcData: WarrantyData[] = get().warrantyInsuranceAmcData;
    newWarrantyInsuranceAmcData = [];
    let newProductSummary: SummaryProductInterface[] = [];
    const newDocumentData: DocumentInterface[] = [];

    if (addProductDetails.documentDetails.isWarrantyApplicable) {
      if (addProductDetails.documentDetails.warranty.applied) {
        newWarrantyInsuranceAmcData.push({
          icon: PrizeColorIcon({}),
          label: 'Brand Warranty',
          firstText: `${
            addProductDetails.documentDetails?.warranty?.coverage +
            ' ' +
            addProductDetails.documentDetails?.warranty?.units
          } Coverage`,
          secondText: '',
          thirdText: '',
          showCoverage: true,
          showInsurance: false,
          show: addProductDetails.documentDetails?.warranty?.applied ?? false,
          warrantyShow: addProductDetails.documentDetails?.isWarrantyApplicable ?? false,
        });

        newDocumentData.push({
          icon: DocumentWithBgColorIcon({}),
          subTitle: addProductDetails.documentDetails.warranty.document?.map((x: any) => x?.name) ?? '',
          title: 'Warranty',
        });
      }

      // if (addProductDetails.documentDetails.extended_warranty.applied) {
      //   newWarrantyInsuranceAmcData.push({
      //     icon: PrizeColorIcon({}),
      //     label: 'Ext Warranty',
      //     firstText: `${
      //       addProductDetails.documentDetails?.extended_warranty?.coverage +
      //       ' ' +
      //       addProductDetails.documentDetails?.extended_warranty?.units
      //     } Coverage`,
      //     secondText: addProductDetails.documentDetails?.extended_warranty?.start_date,
      //     thirdText: '',
      //     showCoverage: true,
      //     showInsurance: false,
      //     show: addProductDetails.documentDetails?.extended_warranty?.applied ?? false,
      //     warrantyShow: addProductDetails.documentDetails?.isWarrantyApplicable ?? false,
      //   });

      //   newDocumentData.push({
      //     icon: DocumentWithBgColorIcon({}),
      //     subTitle: addProductDetails?.documentDetails?.extended_warranty?.document?.map((x: any) => x?.name) ?? '',
      //     title: 'Extended Warranty',
      //   });
      // }
    }
    
    // if (addProductDetails.documentDetails.isInsuranceApplicable) {
    //   newWarrantyInsuranceAmcData.push({
    //     icon: SheildColorIcon({}),
    //     label: 'Insured',
    //     firstText: addProductDetails.documentDetails?.insurance?.policy_no ?? '',
    //     secondText: addProductDetails.documentDetails?.insurance?.purchased_on ?? '', //'16 Jan,23',
    //     thirdText: `${addProductDetails.documentDetails?.insurance?.coverage} ${addProductDetails.documentDetails?.insurance?.units}`,
    //     showCoverage: false,
    //     showInsurance: true,
    //     show: addProductDetails.documentDetails?.isInsuranceApplicable ?? false,
    //     warrantyShow: true,
    //   });

    //   newDocumentData.push({
    //     icon: DocumentWithBgColorIcon({}),
    //     subTitle: addProductDetails.documentDetails.insurance.document?.map((x: any) => x?.name) ?? '',
    //     title: 'Insurance',
    //   });
    // }

    // if (addProductDetails.documentDetails.isAMCApplicable) {
    //   newWarrantyInsuranceAmcData.push({
    //     icon: ToolsColorIcon({}),
    //     label: 'AMC',
    //     firstText: addProductDetails.documentDetails?.amc?.serial_no ?? '',
    //     secondText: addProductDetails.documentDetails?.amc?.purchased_on ?? '', //'16 Jan,23',
    //     thirdText: `${addProductDetails.documentDetails?.amc?.coverage} year`,
    //     showCoverage: false,
    //     showInsurance: true,
    //     show: addProductDetails.documentDetails?.isAMCApplicable ?? false,
    //     warrantyShow: true,
    //   });

    //   newDocumentData.push({
    //     icon: DocumentWithBgColorIcon({}),
    //     subTitle: addProductDetails.documentDetails.amc.document?.map((x: any) => x?.name) ?? '',
    //     title: 'AMC',
    //   });
    // }

    newDocumentData.push({
      icon: DocumentWithBgColorIcon({}),
      subTitle: addProductDetails.documentDetails.invoice.document?.map((x: any) => x?.name) ?? '',
      title: 'Invoice',
    });

    newProductSummary = [
      {
        title: 'Date of Purchase',
        value: addProductDetails.productDetails?.data_of_purchase ?? '',
      },
      {
        title: 'Serial Number',
        value: addProductDetails.productDetails?.serial_no ?? '',
      },
      {
        title: 'Model Number',
        value: addProductDetails?.productDetails?.product_details?.model_no,
      },
      {
        title: 'IMEI Number',
        value: addProductDetails.productDetails?.imei_no ?? '',
      },
      {
        title: 'Mode of Purchase',
        value: addProductDetails.productDetails?.mode_of_purchase ?? '',
      },
      {
        title: 'Location',
        value: addProductDetails.productDetails?.purchase_location?.address ?? '',
      },
    ];

    set({
      warrantyInsuranceAmcData: newWarrantyInsuranceAmcData,
      productSummary: newProductSummary,
      documentData: newDocumentData,
    });
    return 'updated';
  },
}));
