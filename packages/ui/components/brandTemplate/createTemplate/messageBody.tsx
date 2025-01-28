import { Button } from "@atoms/button";
import { EditorQuill } from "@atoms/editorQuill/editor";
import { useTemlateStore } from "@core/store/brand-app";
import { InputField } from "@crayond_dev/ui_input-field";
import { Box, Grid, Popover, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { createTemplateStyle } from "./style";

export const MessageBody = () => {
  const { templateJson, setMessageBody, setDeclareVariable, viewType, error, basicInfo, offersView, setItemName, items } = useTemlateStore();
  const [anchorElRow, setAnchorElRow] = useState<HTMLButtonElement | null>(null);

  const selectedCustomerName = items.includes('Customer name');
  const selectedOfferName = items.includes('Product');
  const selectedPurchaseDate = items.includes('Purchase date');
  const openPop = Boolean(anchorElRow);

  const updateContent = (value: any) => {
    setMessageBody('', value);
  };

  const MenuOption = [
    { id: 1, label: "Customer name" },
    ...(basicInfo?.templateCategory?.label !== 'Offer' ? [{ id: 2, label: "Product" }] : []),
    { id: 3, label: "Purchase date" }
  ];


  const quillRef: any = useRef(null);
  const handleClickMenu = (item: any) => {
    const quillEditor = quillRef.current.getEditor();
    const currentPosition = quillEditor.getSelection().index;

    // Insert the item.label at the current cursor position
    quillEditor.insertText(currentPosition, `{${item.label}}`);

    // Update the templateJson.messageBody by preserving the existing content with emojis and formatting
    const updatedMessageBody = quillEditor.root.innerHTML;
    setMessageBody('', updatedMessageBody);

    setAnchorElRow(null);
  };


  const renderVariableBox = (label: string) => (
    <Box sx={createTemplateStyle.variableBox} mb={2}>
      <Typography sx={createTemplateStyle.varSx}>Variable name</Typography>
      <Typography sx={createTemplateStyle.cusSx}>{label}</Typography>
    </Box>
  );


  const renderInputField = (label: string, placeholder: string, valueKey: string, disabled?: boolean) => (
    <InputField
      variant="filled"
      label="Variable Value"
      placeholder={placeholder}
      fullWidth
      onChange={(e) => setDeclareVariable(valueKey, e.target.value)}
      value={templateJson?.declareVariables?.[valueKey] || offersView?.[valueKey] || ''}
      inputStyle={createTemplateStyle.inputStyle}
      sx={createTemplateStyle.inputSxStyle}
      labelStyle={createTemplateStyle.labelStyle}
      errorStyle={{ fontSize: "1.0rem" }}
      disabled={disabled || viewType === 'view'}
      error={Boolean(error?.[valueKey]?.length)}
      errorMessage={error?.[valueKey]}
      isErrorRequired={Boolean(error?.[valueKey]?.length)}
    />
  );

  return (
    <>
      <Box sx={createTemplateStyle.basicInfoRoot} mt={2}>
        <Typography sx={createTemplateStyle.title}>
          Message body<span style={{ color: "#F44F5A" }}> *</span>
        </Typography>
        <Typography sx={createTemplateStyle.subtitle} mt={1.5}>
          Type your message to send to your customers
        </Typography>
        {/* Text editor */}
        <Box mt={2}>
          <EditorQuill value={templateJson?.messageBody}
            handleChange={updateContent}
            disabled={viewType === 'view'}
            ref={quillRef}
          />

        </Box>
        
          <Button
            sx={createTemplateStyle.addBtnVariable}
            variant="text"
            onClick={(e) => setAnchorElRow(e.currentTarget)}
            disabled={viewType === 'view' ? true : false}
          >
            Add variable
          </Button>
        <Typography sx={createTemplateStyle.title} mt={1}>
          Declare variables
        </Typography>
        <Typography sx={createTemplateStyle.subtitle} mt={1}>
          Enter a sample value for your variables to give context to the
          WhatsApp’s template approval team.
        </Typography>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={6} mt={2}>
            {selectedCustomerName && basicInfo?.templateCategory?.label === 'Basic' && renderVariableBox('Customer name')}
            {basicInfo?.templateCategory?.label === 'Offer' && renderVariableBox('Product')}
            {selectedOfferName && basicInfo?.templateCategory?.label === 'Basic' && renderVariableBox('Product')}
            {basicInfo?.templateCategory?.label === 'Offer' && renderVariableBox('Offer code')}
            {selectedPurchaseDate && basicInfo?.templateCategory?.label === 'Basic' && renderVariableBox('Purchase date')}
            {basicInfo?.templateCategory?.label === 'Offer' && renderVariableBox('Minimum purchase amount')}
            {basicInfo?.templateCategory?.label === 'Offer' && renderVariableBox('Discount value')}
            {basicInfo?.templateCategory?.label === 'Offer' && selectedCustomerName && renderVariableBox('Customer name')}
            {basicInfo?.templateCategory?.label === 'Offer' && selectedPurchaseDate && renderVariableBox('Purchase date')}
            {basicInfo?.templateCategory?.label === 'Offer' && viewType === 'view' && renderVariableBox('Customer name')}
            {basicInfo?.templateCategory?.label === 'Offer' && viewType === 'view' && renderVariableBox('Purchase date')}
          </Grid>
          <Grid item xs={6} mt={2}>
            <Stack rowGap={2}>
              {basicInfo?.templateCategory?.label !== 'Offer' && selectedCustomerName && renderInputField('Customer name', 'Enter customer name', 'customerName')}
              {basicInfo?.templateCategory?.label === 'Offer' && renderInputField('Product', 'Enter Product', 'offerNameOffer', true)}
              {basicInfo?.templateCategory?.label !== 'Offer' && selectedOfferName && renderInputField('Product', 'Enter Product', 'offerName')}
              {basicInfo?.templateCategory?.label === 'Offer' && renderInputField('Offer code', 'Enter offer code', 'offerCode', true)}
              {basicInfo?.templateCategory?.label !== 'Offer' && selectedPurchaseDate && renderInputField('Purchase amount', 'Enter purchase date', 'maxPurchaseAmount')}
              {basicInfo?.templateCategory?.label === 'Offer' && renderInputField('Minimum purchase amount', 'Enter minimum purchase amount', 'minimumAmtOffer', true)}
              {basicInfo?.templateCategory?.label === 'Offer' && renderInputField('Discount value', 'Enter discount value', 'discountValueOffer', true)}
              {basicInfo?.templateCategory?.label === 'Offer' && selectedCustomerName && renderInputField('Customer name', 'Enter customer name', 'customerNameOffer')}
              {basicInfo?.templateCategory?.label === 'Offer' && selectedPurchaseDate && renderInputField('Purchase date', 'Enter purchase date', 'purchaseDateOffer')}
              {basicInfo?.templateCategory?.label === 'Offer' && viewType === 'view' && renderInputField('Customer name', 'Enter customer name', 'customerNameOffer')}
              {basicInfo?.templateCategory?.label === 'Offer' && viewType === 'view' && renderInputField('Purchase date', 'Enter purchase date', 'purchaseDateOffer')}
            </Stack>
          </Grid>
        </Grid>
        <Typography sx={createTemplateStyle.title} mt={2}>
          Footer
        </Typography>
        <Typography sx={createTemplateStyle.subtitle} mt={1.5}>
          Enter a sample value for your variables to give context to the
          WhatsApp’s template approval team.
        </Typography>
        <InputField
          variant="filled"
          label="Type here"
          placeholder="Type here"
          fullWidth
          onChange={(e) => setDeclareVariable("subscribe", e.target.value)}
          value={templateJson?.declareVariables?.subscribe}
          inputStyle={createTemplateStyle.inputStyle}
          sx={{ ...createTemplateStyle.inputSxStyle, mt: 2 }}
          labelStyle={createTemplateStyle.labelStyle}
          errorStyle={{ fontSize: "1.0rem" }}
          disabled={viewType === 'view'}
          error={Boolean(error?.subscribe?.length)}
          errorMessage={error?.subscribe}
          isErrorRequired={Boolean(error?.subscribe?.length)}
        />
      </Box>

      <Popover
        open={openPop}
        anchorEl={anchorElRow}
        onClose={() => setAnchorElRow(null)}
        PaperProps={{ sx: createTemplateStyle.popoverStyle }}
        elevation={1}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {MenuOption?.map((item) => (
          <Typography
            key={item?.id}
            sx={createTemplateStyle.viewTextStyle}
            onClick={() => handleClickMenu(item)}
          >
            {item?.label}
          </Typography>
        ))}
      </Popover>
    </>
  );
};
