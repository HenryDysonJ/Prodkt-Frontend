import { TabsSwitch } from "@atoms/tabsSwitch";
import TopBar from "@components/brandTopBar"
import { MyTemplateList } from "./myTemplate";
import { LibraryList } from "./library";

export const TemplateList = () => {
    const tabsData = [
        { label: 'My templates', children: <MyTemplateList /> },
        { label: 'Library', children: <LibraryList /> },
    ];
    return (
        <>
            <TopBar title="Templates"></TopBar>
            <TabsSwitch
                tabs={tabsData}
                tabStyle={{ p: '12px 24px' }}
            />
        </>
    )
}