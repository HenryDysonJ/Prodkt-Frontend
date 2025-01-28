import { useProductDetails, useViewProductDetails } from '@core/store';
import {
  BackCircleIcon,
  CheckBox,
  Chips,
  CloseIcon,
  CustomizedButton,
  DeleteIcon,
  DocumentShareIcon,
  PageHeader,
  RightArrowIcon,
  ViewDocumentEmptyState,
} from '@core/ui/atoms';
import { DocumentViewCard } from '@core/ui/components';
import { Box, Container, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { viewDocumentStyle } from './style';

export default function ViewProductDocument() {
  const { product_id } = useParams();
  const { product_details, getProductDetails } = useProductDetails();
  const { getViewDocumentDetails, responseData, viewCardLoading } = useViewProductDetails();
  const [isSelect, setIsSelect] = useState<any>([]);
  const [isCheckedCard, setIsCheckedCard] = useState(false);
  const [isShare, setIsShare] = useState(false);
  const [isCheckSelectQuick, setIsCheckSelectQuick] = useState<any>([]);
  const [isCheckSelectOther, setIsCheckSelectOther] = useState<any>([]);
  const [count, setSetCount] = useState<any>([]);

  const location = useLocation();

  const archiveShare = location?.state?.archiveTrue

  // const getCountMethod =() => {
  //   let count = 0
  //   if (isCheckSelectQuick.length > 0) {
  //     isCheckSelectQuick?.forEach((item) =>
  //     return (
  //       item?.document_url?.length
  //       )
  //     )
  //   }
  // }

  const navigate = useNavigate();

  const chipData = [
    {
      value: 1,
      id: 'Amc',
      label: 'AMC',
    },
    {
      value: 2,
      id: 'Insurance',
      label: 'Insurance',
    },
    {
      value: 3,
      id: 'Service',
      label: 'Service',
    },
    {
      value: 4,
      id: 'Warranty',
      label: 'Warranty',
    },
  ];

  const handleChipClick = (val: any) => {
    setIsSelect((previous: any) => [...previous, val]);
  };

  const handleClickDelete = (id: string) => {
    const filterData = isSelect.filter((data_: any) => (data_.id as any) !== id);
    setIsSelect(filterData);
  };

  const handleNavigatePrevious = () => {
    if (isShare) {
      setIsShare(!isShare);
      setIsCheckedCard(!isCheckedCard);
      setIsCheckSelectOther([])
      setIsCheckSelectQuick([])
      setSetCount([])
    } else
      navigate(-1);

  };


  let pressTimer: any;

  const handleMouseDown = () => {
    pressTimer = setTimeout(() => {
      setIsShare(!isShare);
      setIsCheckedCard(!isCheckedCard);

    }, 1000); // Adjust the time duration for your desired long-press duration
  };

  const handleClickShare = () => {
    setIsShare(!isShare);
    setIsCheckedCard(!isCheckedCard);
    setIsCheckSelectOther([]);
    setIsCheckSelectQuick([]);
    setSetCount([]);
  };

  const onChangeQuickSelectAll = (check: boolean) => {
    if (check) {
      const filterData = responseData
        .map((val) => val.arrayData)
        .flat()
        ?.filter(
          (data_: any) => data_.is_active === true && data_?.document_url?.[0] !== '' && data_?.document_url !== null,
        );
      setIsCheckSelectQuick(filterData);
      setSetCount(filterData);
    } else {
      setIsCheckSelectQuick([]);
      setSetCount([]);
    }
  };

  const onChangeOtherSelectAll = (check: boolean) => {
    if (check) {
      const filterDataOtherDocument = responseData
        .map((val) => val.cardName !== 'Invoice' && val.arrayData)
        .flat()
        ?.filter(
          (data_: any) => data_.is_active === false && data_?.document_url?.[0] !== '' && data_?.document_url !== null,
        );
      setIsCheckSelectOther(filterDataOtherDocument);
      setSetCount(filterDataOtherDocument);
    } else {
      setIsCheckSelectOther([]);
      setSetCount([]);
    }
  };

  const onChangeCheckedQuick = (check: boolean, value: any) => {
    if (check) {
      setIsCheckSelectQuick((previous: any) => [...previous, value]);
      setSetCount((previous: any) => [...previous, isCheckSelectQuick]);
    } else {
      const checkedData = isCheckSelectQuick.filter((data: any) => data.id !== (value.id as any));
      setIsCheckSelectQuick(checkedData);
      setSetCount(checkedData);
    }
  };

  const onChangeCheckedOther = (check: boolean, value: any) => {
    if (check) {
      setIsCheckSelectOther((previous: any) => [...previous, value]);
      setSetCount((previous: any) => [...previous, isCheckSelectOther]);
    } else {
      const checkedData = isCheckSelectOther.filter((data: any) => data.id !== value.id);
      setIsCheckSelectOther(checkedData);
    }
  };

  function convertUrlToFileObject(url: string, filename: string, mimeType: string) {
    return fetch([url])
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((buffer) => {
        const file = new File([buffer], filename, { type: mimeType });
        return file;
      });
  }

  //share ticket
  const sharePass = async () => {
    const shareData = [...isCheckSelectOther, ...isCheckSelectQuick];
    const URLS = shareData.map((urls) => urls?.document_url?.join(' '));

    const data = [];
    for (const url of URLS) {
      const getProductNickName = (name: string) => {
        if (name?.length > 0) {
          const lastIndex = name?.lastIndexOf('_');
          const na = name.slice(0, lastIndex + 1);

          return na.substring(0, na.length - 1);
        } else {
          return '';
        }
      };

      const data_name = getProductNickName(url?.split('/')?.pop());
      const data_type = url?.split('.')?.pop();

      const file = await convertUrlToFileObject(
        url,
        `${data_name}.${data_type}`,
        data_type === 'pdf' ? 'application/pdf' : 'image/png',
      );
      data.push(file);
    }

    if (navigator.canShare && navigator.canShare({ files: data })) {
      try {
        await navigator.share({
          files: data,
        });
        /*
          Show a message if the user shares something
        */
        console.log(`Thanks for Sharing!`);
        setTimeout(() => {
          setIsShare(!isShare);
          setIsCheckedCard(!isCheckedCard);
          setIsCheckSelectOther([]);
          setIsCheckSelectQuick([]);
          setSetCount([]);
        }, 2000);
      } catch (err) {
        /*
           This error will appear if the user cancels the action of sharing.
         */
        console.log(`Couldn't share ${err}`);
      }
    }
  };

  useEffect(() => {
    if (product_id) {
      getProductDetails(product_id);
      getViewDocumentDetails(product_id);
    }
  }, [product_id]);

  // Amplitude tracking
  useEffect(() => {
    track('View product document page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'primary.900' }}>
        <Box sx={viewDocumentStyle.mainBoxSx}>
          <PageHeader
            subRootStyle={{ width: '88%' }}
            icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
            useBackBtnClick
            onBackBtnClick={handleNavigatePrevious}
            showIcon
            header
            headerText={`${product_details.nick_name} Documents`}
          />

          {viewCardLoading ? (
            <Box>
              <Skeleton sx={viewDocumentStyle.singleSx} variant="rounded" />
            </Box>
          ) : (
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="subtitle2" sx={viewDocumentStyle.quickSx}>
                Quick Access
              </Typography>
              {
                archiveShare ? null :
                  <>
                    {isShare && (
                      <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Typography sx={viewDocumentStyle.selectSx}>Select all</Typography>
                        <CheckBox
                          checked={
                            isCheckSelectQuick.length ===
                              responseData
                                .map((val) => val.arrayData)
                                .flat()
                                ?.filter(
                                  (data_: any) =>
                                    data_.is_active === true && data_?.document_url?.[0] !== '' && data_?.document_url !== null,
                                ).length
                              ? true
                              : false
                          }
                          onChange={onChangeQuickSelectAll}
                        />
                      </Stack>
                    )}
                  </>
              }
            </Stack>
          )}
          {viewCardLoading ? (
            <Stack gap={2} direction={'row'}>
              <Box sx={viewDocumentStyle.skeletonBox}>
                <Skeleton
                  sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '30px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '150px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
              </Box>
              <Box sx={viewDocumentStyle.skeletonBox}>
                <Skeleton
                  sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '30px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
                <Skeleton
                  sx={{ width: '150px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                  variant="rounded"
                />
              </Box>
            </Stack>
          ) : responseData.map((val) => val?.arrayData.length > 0)?.filter((data_: any) => data_.is_active === true)
            .length > 0 ? (
            <Stack minHeight={'20vh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
              <ViewDocumentEmptyState />
              <Typography sx={{ color: 'text.A100', fontWeight: 'bold', fontSize: '14px', mt: 3 }}>
                No Documents Found
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={2} sx={isCheckedCard ? viewDocumentStyle.gridSx : viewDocumentStyle.gridBoxSx}>
              {Array.isArray(responseData) && responseData?.length > 0
                ? responseData.map((val: any, i) => {
                  if (
                    Array.isArray(val?.arrayData) &&
                    val?.arrayData?.length > 0 &&
                    val?.arrayData?.document_url?.[0] !== '' &&
                    val?.documentURL?.[0] !== null &&
                    val?.documentURL?.[0] !== '' &&
                    val?.arrayData.filter((data_: any) => data_.is_active === true) &&
                    val?.arrayData.filter((data_: any) => data_.is_active === true)?.length > 0
                  ) {
                    return (
                      <DocumentViewCard
                        key={i}
                        isGrid={true}
                        handleMouseDown={() => handleMouseDown()}
                        isCheckIcon={isCheckedCard}
                        checked={isCheckSelectQuick.map((check: any) => check.id)}
                        onChange={(checked, value) => onChangeCheckedQuick(checked, value)}
                        documentData={val?.arrayData ?? []}
                        cardName={val?.cardName ?? ''}
                        nickName={val?.nickName ?? ''}
                      />
                    );
                  } else if (val?.key_ === 'user_product_details' && val?.documentURL !== null) {
                    return (
                      <DocumentViewCard
                        key={i}
                        isGrid={true}
                        handleMouseDown={() => handleMouseDown()}
                        documentData={[val.arrayData]}
                        isCheckIcon={isCheckedCard}
                        checked={isCheckSelectQuick.map((check: any) => check.id)}
                        onChange={(checked, value) => onChangeCheckedQuick(checked, value)}
                        cardName={val?.cardName ?? ''}
                        nickName={val?.nickName ?? ''}
                      />
                    );
                  }
                })
                : null}
            </Grid>
          )}
        </Box>
        <Box sx={viewDocumentStyle.otherSx}>
          {viewCardLoading ? (
            <Box>
              <Skeleton sx={viewDocumentStyle.otherSkeletonSx} variant="rounded" />
            </Box>
          ) : (
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="subtitle2" sx={viewDocumentStyle.otherTextSx}>
                Other documents
              </Typography>
              {isShare && (
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <Typography sx={viewDocumentStyle.selectSx}>Select all</Typography>
                  <CheckBox
                    checked={
                      isCheckSelectOther.length > 0 &&
                      (isCheckSelectOther.length ===
                        responseData
                          .map((val) => val.cardName !== 'Invoice' && val.arrayData)
                          .flat()
                          ?.filter(
                            (data_: any) =>
                              data_?.is_active === false &&
                              data_?.document_url?.[0] !== '' &&
                              data_?.document_url !== null,
                          ).length
                        ? true
                        : false)
                    }
                    onChange={onChangeOtherSelectAll}
                  />
                </Stack>
              )}
            </Stack>
          )}

          {viewCardLoading ? (
            <Stack gap={2} direction={'row'}>
              <Skeleton sx={viewDocumentStyle.chipSx} variant="rounded" />
              <Skeleton sx={viewDocumentStyle.chipSx} variant="rounded" />
              <Skeleton sx={viewDocumentStyle.chipSx} variant="rounded" />
              <Skeleton sx={viewDocumentStyle.chipSx} variant="rounded" />
            </Stack>
          ) : (
            <>
              {!isCheckedCard && (
                <Stack direction={'row'} mb={2} gap={1}>
                  {chipData.map((val, index) => {
                    return (
                      <Chips
                        key={index}
                        label={val?.label}
                        isSelected={isSelect.filter((data: any) => data?.id === val?.id).length > 0}
                        deleteIcon={<CloseIcon rootStyle={{ color: 'background.surface.B200' }} />}
                        onDelete={() => handleClickDelete(val.id)}
                        onClick={() => handleChipClick(val)}
                      />
                    );
                  })}
                </Stack>
              )}
            </>
          )}

          {responseData.map((val) => val.arrayData.length > 0)?.filter((data_: any) => data_.is_active === false) ? (
            <Stack minHeight={'40vh'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
              <ViewDocumentEmptyState />
              <Typography sx={{ color: 'text.A100', fontWeight: 'bold', fontSize: '14px', mt: 3 }}>
                No Documents Found
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={2}>
              {Array.isArray(responseData) && responseData?.length > 0
                ? responseData
                  .filter((filterData) =>
                    isSelect.length > 0
                      ? isSelect.map((select: any) => select.id).includes(filterData.cardName)
                      : true,
                  )
                  .map((val, i) => {
                    if (
                      Array.isArray(val?.arrayData) &&
                      val?.arrayData?.length > 0 &&
                      val?.documentURL?.[0] !== '' &&
                      val?.documentURL?.[0] !== null &&
                      val?.arrayData.filter((data: any) => data.is_active === false) &&
                      val?.arrayData.filter((data: any) => data.is_active === false)?.length > 0
                    ) {
                      return (
                        <DocumentViewCard
                          key={i}
                          isGrid={true}
                          handleMouseDown={() => handleMouseDown()}
                          checked={isCheckSelectOther.map((check: any) => check.id)}
                          onChange={(checked, value) => onChangeCheckedOther(checked, value)}
                          isCheckIcon={isCheckedCard}
                          documentData={val?.arrayData ?? []}
                          cardName={val?.cardName ?? ''}
                          nickName={val?.nickName ?? ''}
                        />
                      );
                    }
                  })
                : null}
            </Grid>
          )}
          <Box sx={viewDocumentStyle.addPro}>
            {!isShare ? (
              <>
                {
                  location?.state === null ? (
                    <Container sx={viewDocumentStyle.containerStyle}>
                      <Box sx={viewDocumentStyle.plusTextButtonSx} onClick={handleClickShare}>
                        <DocumentShareIcon />
                      </Box>
                    </Container>
                  ) : ''
                }
              </>
            ) : (

              < Container sx={viewDocumentStyle.customButtonStyle}>
                {
                  archiveShare ? null :
                    <Box>
                      <CustomizedButton
                        count={count?.length}
                        title="Selected"
                        categories="document"
                        buttonText="Share"
                        icon={<RightArrowIcon />}
                        purchase
                        sucess={sharePass}
                      />
                    </Box>
                }
              </Container>
            )}
          </Box>
        </Box>
      </Box>
  );
}
