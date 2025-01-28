import { TabsSwitch } from "@atoms/tabsSwitch";
import { TopBar } from "@core/ui/components";
import { Box } from "@mui/material";
import { ConfigureWebforms } from "./myWebForms";
import Library from "./library";

const Webforms = () => {
  const tabsData = [
    { label: "My webforms", children: <ConfigureWebforms /> },
    { label: "library", children: <Library /> },
  ];

  return (
    <>
      <TopBar title="Configure webforms" backBtn={false} />
      <Box sx={{ "& .MuiTabs-flexContainer": { columnGap: "4rem" } }}>
        {/* <TabsSwitch tabs={tabsData} tabStyle={{ p: "12px 24px" }} /> */}
        <ConfigureWebforms />
      </Box>
    </>
  );
};

export default Webforms;
