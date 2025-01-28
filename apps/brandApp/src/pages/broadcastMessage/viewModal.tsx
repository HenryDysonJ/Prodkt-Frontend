import { useBroadCastMessage } from "@core/store/brand-app";
import { Checkbox } from "@crayond_dev/ui_checkbox";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { TimePicker } from "@crayond_dev/ui_time-picker";
import { Grid, Stack, SxProps, Typography } from "@mui/material";
import InputFeildComponent from "@pages/brandCreateWebForm/components/inputFeild";
import dayjs from 'dayjs';
import moment from "moment";
import React, { useEffect, useState } from "react";
import CalenderIcon from "../../assets/calender";
import { DefaultRondUnCheck } from "../../assets/defaultRondUnCheck";
import { DefaultRoundChecked } from "../../assets/defaultRoundChecked";
import Templats from "./helperComponents/templats";
import { broadcastMsgStyle } from "./style";



export const ViewModal = () => {

    const [value, setValue] = React.useState<any | null>(null);

    const { broadCasteState, setSelectTemplates, setHandleSelectTag, setScheduleAndPublish } = useBroadCastMessage();
    const tagOptions = broadCasteState?.broadCastView?.data?.broadcast_customer_tags?.map((item: any) => ({
        label: item?.segment?.name,
        value: item?.segment?.id,
    }));    

    const ChatJson = [
        {
            id: 1,
            title: broadCasteState?.broadCastView?.data?.template?.name,
            status: broadCasteState?.broadCastView?.data?.template?.status?.id === 7 ? true : false,
            select: false,
            chats: [
                {
                    message: broadCasteState?.broadCastView?.data?.template_json?.find((val: any) => val?.type === 'BODY')?.example.body_text?.[0] ?? ''
                }
            ],
        },
    ];

    return (
        <>
            <Grid container gap={2}>
                <Grid item xs={7.6}>
                    <Typography sx={broadcastMsgStyle.sublabelStyleSx}>
                        Basic information
                    </Typography>
                    <InputFeildComponent
                        inputValue={broadCasteState?.broadCastView?.data?.name ?? ''}
                        labelName={"Broadcast Name"}
                        handleInputChange={(val) => setSelectTemplates("broadcastName", val)}
                        sx={{ marginTop: 2 }}
                        disabled={true}
                    />

                    <Stack>
                        <Typography sx={broadcastMsgStyle.sublabelStyleSx} mb={"1.2rem"} mt={2}>
                            Customers
                        </Typography>
                        <SelectAndautocomplete
                            options={tagOptions ?? ''}
                            variant="filled"
                            selectType="chip"
                            placeholder={""}
                            multiple
                            limitTags={10}
                            optionSelectedIconShow={false}
                            onChange={(e: any, value: any) => setHandleSelectTag(value)}
                            freeSolo
                            value={tagOptions ?? ''}
                            label={"Select customer tags"}
                            isError={false}
                            sx={{
                                ...broadcastMsgStyle.selectinptStyle, '& .MuiChip-root': {
                                    marginTop: '10px !important'
                                },
                            }}
                            optionStyle={{ fontSize: "1.4rem" }}
                            labelStyleProps={{ fontSize: "1.6rem !important" }}
                            disabled={true}
                        />
                    </Stack>

                    <Stack>
                        <Typography sx={broadcastMsgStyle.temTitleStyle} mb={"1.2rem"} mt={2}>
                            Delivery preferences
                        </Typography>
                        <Typography sx={broadcastMsgStyle.temTitleStyle} fontWeight={500}>
                            Delivery type
                        </Typography>
                        <Stack direction={"row"} mt={1.5}>
                            <Checkbox
                                id={"Checkbox_i"}
                                className={""}
                                label={"Immediate"}
                                checked={Boolean(broadCasteState?.broadCastView?.data?.is_immediate === true && 'Immediate')}
                                indeterminate={false}
                                onChange={(e) =>
                                    setScheduleAndPublish("deliveryType", 'Immediate')
                                }
                                labelStyle={{
                                    ...broadcastMsgStyle.statusTitle,
                                    color: "text.main",
                                }}
                                checkedIcon={<DefaultRoundChecked />}
                                icon={<DefaultRondUnCheck />}
                                disabled={true}
                            />
                            <Checkbox
                                id={"Checkbox_i"}
                                className={""}
                                label={"Schedule"}
                                checked={Boolean(broadCasteState?.broadCastView?.data?.is_immediate === false && 'Schedule')}
                                indeterminate={false}
                                onChange={(e) =>
                                    setScheduleAndPublish("deliveryType", 'Schedule')
                                }
                                labelStyle={{
                                    ...broadcastMsgStyle.statusTitle,
                                    color: "text.main",
                                }}
                                checkedIcon={<DefaultRoundChecked />}
                                icon={<DefaultRondUnCheck />}
                                disabled={true}

                            />
                        </Stack>
                        <Grid container spacing={2} alignItems="center" mt={-0.5}>
                            <Grid item xs={6}>
                                <InputFeildComponent
                                    required={false}
                                    inputValue={broadCasteState?.broadCastView?.data?.schedule_state_date ? moment(broadCasteState?.broadCastView?.data?.schedule_state_date).format('DD-MM-YYYY') : '' ?? ''}
                                    labelName={"Start date"}
                                    handleInputChange={(value: string) => undefined}
                                    InputProps={{
                                        endAdornment: <CalenderIcon />,
                                    }}
                                    sx={{ maxWidth: "34rem", mt: 1 } as SxProps}
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TimePicker
                                    value={broadCasteState?.broadCastView?.data?.schedule_start_time ? dayjs(moment()?.format('YYYY-MM-DD') + 'T' + broadCasteState?.broadCastView?.data?.schedule_start_time) : ''}
                                    onChange={(val: any | null) => setValue(val)}
                                    onAccept={(val: any | null) => console.log(val, "iui")}
                                    headerData={[
                                        { id: "1", label: "HH" },
                                        { id: "2", label: "MM" },
                                        { id: "2", label: "Period" },
                                    ]}
                                    label="Start time"
                                    variant="filled"
                                    placeholder="Start time"
                                    fullWidth
                                    sx={{ width: "100%" }}
                                    error={false}
                                    disabled={true}
                                />
                            </Grid>
                        </Grid>

                    </Stack>
                </Grid>
                <Grid item xs={3.8} ml={2}>
                    <Typography sx={broadcastMsgStyle.sublabelStyleSx}>Template</Typography>
                    {ChatJson &&
                        ChatJson?.length > 0 &&
                        ChatJson?.map((item: any) => (
                            <Grid item mt={2} >
                                <Templats
                                    title={item?.title}
                                    status={item?.status}
                                    select={item?.select}
                                    chats={item?.chats}
                                    setHandleSelect={(val) => handleChooseTemplate(val, item)}
                                    changeTemp={true}

                                />
                            </Grid>
                        ))}
                </Grid>
            </Grid>

        </>
    )
}