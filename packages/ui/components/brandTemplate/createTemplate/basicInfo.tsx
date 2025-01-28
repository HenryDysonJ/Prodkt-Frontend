import DownArrowIcon from "@assets/brandAssets/downArrow";
import { useTemlateStore } from "@core/store/brand-app";
import { InputField } from "@crayond_dev/ui_input-field";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Box, Grid, Typography } from "@mui/material";
import { createTemplateStyle } from "./style";
import { useEffect } from "react";

export const BasicInformation = () => {
  const { templatesCategoryList, basicInfo, setBasicInfo, viewType, error, getOffersList, offersList, offersView, setMessageBody, setDeclareVariable } = useTemlateStore();

  const category =
    templatesCategoryList &&
    templatesCategoryList?.length > 0 &&
    templatesCategoryList?.map((item: any) => ({
      label: item?.name,
      value: item?.id
    }));

  const offerOptions = offersList?.rows?.map((item: any) => ({
    label: item?.name,
    value: item?.id
  }));



  const offerBasic = "Special Offer {Offer Name} Use code {Offer Code} on purchases over {Minimum Purchase Amount} and enjoy {Discount Value}% off! Valid until {Discount Period}. Hurry, don't miss out! "

  const offerExchange = "Exclusive Exchange Offer {Offer Name} Exchange your {Brand, Category, Product Type} for {Brand, Category, Product Type} and get {Discount Value}% off! Use code: {Offer Code}. Offer valid until {Discount Period}. Don't miss out!"

  const offerMessage = offersView?.offer_type === 'Exchange offer' ? offerExchange : offerBasic


  const handleOfferType = (value: any) => {
    setBasicInfo('offerType', value)
    setMessageBody('', offerMessage)
  }

  const handleCategory = (value: any) => {
    setBasicInfo("templateCategory", value)
    setMessageBody('', '')
  }

  useEffect(() => {
    if (offersView?.name) {
      const timeoutId = setTimeout(() => {
        setDeclareVariable('offerNameOffer', offersView?.name);
        setDeclareVariable('offerCode', offersView?.code);
        setDeclareVariable('discountValueOffer', offersView?.discount_value);
        setDeclareVariable('minimumAmtOffer', offersView?.minimum_purchase_value);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [offersView?.name, setDeclareVariable]);

  useEffect(() => {
    getOffersList()
  }, [])

  return (
    <>
      <Box sx={createTemplateStyle.basicInfoRoot}>
        <Typography sx={createTemplateStyle.title}>
          Basic information
        </Typography>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} sm={6} mt={2}>
            <InputField
              variant="filled"
              label="Template Name"
              placeholder="Enter template name"
              fullWidth
              onChange={(e) => setBasicInfo("templateName", e?.target?.value)}
              value={basicInfo?.templateName}
              inputStyle={createTemplateStyle.inputStyle}
              sx={createTemplateStyle.inputSxStyle}
              labelStyle={createTemplateStyle.labelStyle}
              errorStyle={{ fontSize: "1.0rem" }}
              disabled={viewType === 'view' ? true : false}
              error={error?.templateName?.length ? true : false}
              errorMessage={error?.templateName}
              isErrorRequired={error?.templateName?.length ? true : false}

            />
          </Grid>
          <Grid item xs={12} sm={6} mt={2}>
            <SelectAndautocomplete
              options={category as any ?? {}}
              variant="filled"
              selectType="chip"
              limitTags={1}
              onChange={(e: any, value: any) =>
                handleCategory(value)
              }
              value={basicInfo?.templateCategory}
              label={"Template category"}
              addOptionAction={() => console.log("hih")}
              endAdornmentIcon={<DownArrowIcon />}
              rootStyleSx={createTemplateStyle.selectLabelStyle}
              optionStyle={{ fontSize: "1.4rem" }}
              labelSx={{ fontSize: "2.2rem" }}
              labelStyleProps={{ fontSize: "16px !important" }}
              disabled={viewType === 'view' ? true : false}
              isError={error?.templateCategory?.length ? true : false}
              helperText={error?.templateCategory}
            />
          </Grid>

          {basicInfo?.templateCategory?.label === 'Offer' &&
            <Grid item xs={6}>
              <SelectAndautocomplete
                options={offerOptions as any ?? {}}
                variant="filled"
                selectType="chip"
                limitTags={1}
                onChange={(e: any, value: any) =>
                  handleOfferType(value)
                }
                freeSolo
                value={basicInfo?.offerType}
                label={"Choose offer"}
                addOptionAction={() => console.log("hih")}
                endAdornmentIcon={<DownArrowIcon />}
                rootStyleSx={createTemplateStyle.selectLabelStyle}
                optionStyle={{ fontSize: "1.4rem" }}
                labelSx={{ fontSize: "2.2rem" }}
                labelStyleProps={{ fontSize: "16px !important" }}
                disabled={viewType === 'view' ? true : false}
                isError={error?.offerType?.length ? true : false}
                helperText={error?.offerType}
              />
            </Grid>
          }
        </Grid>
      </Box>
    </>
  );
};
