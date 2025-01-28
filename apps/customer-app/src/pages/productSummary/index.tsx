import { track } from '@amplitude/analytics-browser';
import { webRoutes } from '@core/routes';
import { addProductDetails, useSearchFilterProduct, } from '@core/store';
import { BackCircleIcon, Button, PageHeader } from '@core/ui/atoms';
import { PlusCircleIcon } from '@core/ui/atoms/icons/productSearchIconsLists';
import { ProductListCard, SpecificationCard } from '@core/ui/components';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { productSummaryStyle } from './style';

export default function ProductSummary() {
  const [openDrawer] = useState<boolean>(true);
  const location = useLocation();
  const value = location?.state?.product;

  const navigate = useNavigate();

  const { updateProducts, updateProductDetails, getStandardWarrantyDetails } = addProductDetails();


  const {
    data,
    brandData,
  } = useSearchFilterProduct();


  const filter = data?.filter((val) => val?.label !== 'Category' && val?.label !== 'Brands')?.map((val) => val)

  const handleClick = () => {
    navigate(webRoutes?.addProductDetails, {
      state: {
        // product: value,
        // product_id: value?.id,
        typeId: location?.state?.product?.type_id,
        open: openDrawer,

      },
    });

    updateProductDetails('product_details', { name: value.product_name, ...value });
    updateProductDetails('product_id', value?.id as never);
    updateProductDetails('category', { value: value?.type_id } as never);
    updateProducts('currentStep', 1);
    getStandardWarrantyDetails(value?.warranty_details);
  };

  const backRouteSearchProduct = () => {
    navigate(webRoutes.searchproduct, {
      state: {
        typeId: value.type_id,
        isProductSummery: true,
        category_name: value.category_name,
        filter_data: filter,
        brandData:brandData
      }
    });

    // setAFilterCategorySelected(value.type_id, value.category_name, filterData)
    // setSearchCategoryFnc(value.category_name)
    // updateCategoryAndBrand(value.category_name)
    // getSearchProduct(value.type_id, '', false);

  };


  useEffect(() => {
    if (!value || (value?.product_id === '' && value?.product === null)) {
      navigate(webRoutes.searchproduct);
    }
  });


  // Amplitude tracking
  useEffect(() => {
    track('product summary page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={productSummaryStyle.rootSx}>
      <Box>
        <Box sx={productSummaryStyle.pageHeaderSx}>
          <PageHeader
            icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
            useBackBtnClick={true}
            onBackBtnClick={() => backRouteSearchProduct()}
            showIcon
            header
            headerText="Add Product"
          />
        </Box>
        <Box sx={productSummaryStyle.productListCardSx}>
          <ProductListCard
            imageURL={value?.url}
            productId={value?.product_id}
            productDescription={value?.product_name}
          />
        </Box>
        <Box sx={productSummaryStyle.specificationCardSx}>
          <SpecificationCard
            paddingStyle
            modalNo={value?.model_no}
            heading="Specifications"
            showIcon={true}
            specification={value?.specification}
          />
        </Box>
      </Box>

      <Box sx={productSummaryStyle.addButtonSx}>
        <Button
          data-testid="addProductbutton"
          sx={productSummaryStyle.addProductButton}
          onClick={handleClick}
          fullWidth
          startIcon={<PlusCircleIcon />}
        >
          Add Product
        </Button>
      </Box>
    </Box>
  );
}
