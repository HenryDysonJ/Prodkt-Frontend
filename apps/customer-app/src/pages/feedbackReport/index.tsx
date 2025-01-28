
import { useFeedbackReport } from '@core/store';
import { BackCircleIcon, Button, ImageUpload, Input, PageHeader, ToggleButton } from '@core/ui/atoms';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { FeedbackStyle } from './style';
import { track } from '@amplitude/analytics-browser';

export default function FeedbackReport() {

    const options = [
        {
            value: 'Report a Bug',
            label: 'Report a Bug',
        },
        {
            value: 'Give Feedback',
            label: 'Give Feedback',
        },
    ]

    const { feedbackReportData, formLoading, validateFeedbackFrom, clearState, updateFeedbackReportData, updateFeedbackReport, attachments, onUploadCaptureFile } = useFeedbackReport();


    const handleUpdateReport = () => {
        const status = validateFeedbackFrom();
        if (status) {
            updateFeedbackReport();
        }

    }
    useEffect(() => {
        clearState();
    }, [])

    // Amplitude tracking
    useEffect(() => {
        track('Feedback report page', {
            name: 'customer-app',
        });
    }, []);

    return (
        <>
            <Box sx={FeedbackStyle.rootSx}>
                <PageHeader
                    subRootStyle={{ width: '88%' }}
                    icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                    showIcon
                    header
                    headerText="Report"
                />
                <Box padding={2} sx={FeedbackStyle.boxSx}>
                    <Typography variant='subtitle1' sx={FeedbackStyle.reportSx}>Report</Typography>
                    <Typography sx={FeedbackStyle.typeSx}>Type</Typography>
                    <ToggleButton
                        value={feedbackReportData?.type ?? ''}
                        sx={{ mb: 2 }}
                        fullResponse={true}
                        onChange={(val: any) => updateFeedbackReportData('type', val?.value)}
                        options={options} />
                    <Input
                        testFieldStyle={{
                            mb: 0.8, '& input': {
                                fontSize: '14px',
                                padding: '15px 0px',
                                fontWeight: 500,
                                color: 'grey.A500'
                            }
                        }}
                        value={feedbackReportData?.page_name}
                        onChange={(e) => updateFeedbackReportData('page_name', e.target.value)}
                        placeholder='Page Name'
                        errorMessage={feedbackReportData?.errorMessage?.page_name}
                        isError={feedbackReportData?.errorMessage?.page_name?.length > 0}
                        error={feedbackReportData?.errorMessage?.page_name?.length > 0} />
                    <Input
                        testFieldStyle={{
                            mb: 0.8, '& input': {
                                fontSize: '14px',
                                padding: '15px 0px',
                                fontWeight: 500,
                                color: 'grey.A500'
                            }
                        }}
                        placeholder='Description'
                        value={feedbackReportData?.description}
                        onChange={(e) => updateFeedbackReportData('description', e.target.value)}
                        minRows={'3'}
                        isError={feedbackReportData?.errorMessage?.description?.length > 0}
                        errorMessage={feedbackReportData?.errorMessage?.description}
                        error={feedbackReportData?.errorMessage?.description?.length > 0}
                        multiline={true}
                    />
                    <Typography sx={FeedbackStyle.attachedSx}>Attachments</Typography>

                    <Stack direction={'row'} flexWrap={'wrap'} gap={1.8}>
                        {attachments?.map((val) => {
                            return (
                                <Box>
                                    <img
                                        src={`${URL.createObjectURL(val)}`}
                                        alt="profile images"
                                        height={'76px'}
                                        width={'76px'}
                                        style={{ objectFit: 'cover', boxShadow: '#00000014 0px 2px 4px', borderRadius: '8px' }}
                                    />
                                </Box>
                            )
                        })}
                        <ImageUpload onUpload={(e) => onUploadCaptureFile(e.target?.files?.[0] ?? '')} />
                    </Stack>


                </Box>
            </Box>
            <Box sx={FeedbackStyle.btnBox}>
                <Button sx={FeedbackStyle.btnSx} loading={formLoading} onClick={() => handleUpdateReport()}>submit</Button>
            </Box>
        </>
    );
}
