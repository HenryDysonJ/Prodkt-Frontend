import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";

import Attendance from "./assets/Ellipse-profie.png";
import ProductLogo from "./assets/productLogo";
import { topNavbarStyle } from "./style";

import React, { useState } from 'react';
import { Menu, Typography, MenuItem, CircularProgress, Divider } from '@mui/material';
import NotifyIcon from '@mui/icons-material/Notifications'; // Assume a notification icon component
import NofiticationIcon, { NofiticationBell } from "./assets/notificationIcon";

export interface TopNavbarPros {
  className?: string;
  sx?: SxProps<Theme>;
  notificationCount?: number;
  navProfileImg?: string;
  handleProfileClick: (e: any) => void;
}


const jsonNotification = [
  { id: 1, title: "New Message", message: "You have a new message from John.", time: "12/12/2023,12:25 PM", read: false },
  { id: 2, title: "Meeting Reminder", message: "Don't forget the team meeting at 3 PM.", time: "12/12/2023,12:25 PM", read: true },
  { id: 2, title: "Meeting Reminder", message: "Don't forget the team meeting at 3 PM.", time: "12/12/2023,12:25 PM", read: true },
  { id: 3, title: "System Update", message: "Your system will update tonight at 2 AM.", time: "12/12/2023,12:25 PM", read: false }
]

export function TopNavbar(props: TopNavbarPros): JSX.Element {
  const {
    className = "",
    sx = {},
    notificationCount = 6,
    navProfileImg = Attendance,
    handleProfileClick,
    ...rest
  } = props;

  const [anchorElNotification, setAnchorElNotification] = useState<null | HTMLElement>(null);

  const handleOpenNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNotification(event.currentTarget);
  };

  const handleCloseNotification = () => {
    setAnchorElNotification(null);
  };

  const [viewedData, setViewedData] = useState(2);
  const [NotificationArray, setNotificationArray] = useState(jsonNotification);

  const handleUpdate = (id: number) => {
    setNotificationArray(prevArray =>
      prevArray.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Box
      sx={[
        {
          ...topNavbarStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <AppBar position="static" sx={{ ...topNavbarStyle.appBar }}>
        <Toolbar disableGutters>
          <Stack sx={topNavbarStyle.parentBox}>
            <Box>
              <ProductLogo />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ marginRight: "4rem", cursor: 'pointer' }}>
                <Badge
                  badgeContent={notificationCount}
                  color="error"
                  overlap="circular"
                  sx={topNavbarStyle.batchStyle}
                  onClick={handleOpenNotification}
                >
                  <NofiticationIcon />
                </Badge>
              </Box>
              <Box>
                <Box
                  sx={topNavbarStyle.profileStyle}
                  onClick={handleProfileClick}
                >
                  <Avatar src={navProfileImg} />
                </Box>
              </Box>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Notification drawer */}
      <Menu
        anchorEl={anchorElNotification}
        id='notification-menu'
        open={Boolean(anchorElNotification)}
        onClose={handleCloseNotification}
        sx={topNavbarStyle.notificationBoxSx}
      >
        <Box sx={topNavbarStyle.notificationParentBox}>
          <Typography sx={topNavbarStyle.notificationTypo}>Notifications</Typography>
          <Box sx={topNavbarStyle.notificationTypoBox}>
            <Typography sx={topNavbarStyle.notificationTypoBoxNo}>{viewedData}</Typography>
          </Box>
        </Box>
        <Box>
          {NotificationArray.map((data, index) => (
            <React.Fragment key={index}>
              <MenuItem sx={{ textWrap: 'wrap' }} onClick={() => handleUpdate(data.id)}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'start' }}>
                    <Box sx={{ mt: '5px', position: 'relative' }}>
                      <Box
                        sx={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          bgcolor: 'custom.surfaceDim',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <NofiticationBell />
                      </Box>
                      {!data.read && (
                        <Box sx={topNavbarStyle.dot}></Box>
                      )}
                    </Box>
                    <Box sx={{ ml: '10px', minHeight: '35px' }}>
                      {data.title && (
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: 'custom.onSurface' }}>
                          {data.title}
                        </Typography>
                      )}
                      <Box component='span' sx={topNavbarStyle.notificationSpanMessage}>
                        {data.message}
                      </Box>
                      <Typography sx={topNavbarStyle.notificationTime}>{data.time}</Typography>
                    </Box>
                  </Box>
                </Box>
              </MenuItem>
              {index !== NotificationArray.length - 1 && (
                <Divider sx={{ width: '90%', marginLeft: '20px' }} />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Menu>
    </Box>
  );
}
