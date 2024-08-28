import React from 'react'
import { Tabs, TabList, TabPanels, TabPanel, TabIndicator} from '@chakra-ui/react'
import CustomTab from './CustomTab';

interface EnumServiceItem {
    label: string; 
    content: React.ReactNode;
}

interface DataTabsProps {
    defaultIndex?: number;
    size?: string,
    bg?: string,
    colorScheme?: string,
    align?: any,
    variant?: string,
    position?: any,
    isFitted?: true,
    isCustomTab?: boolean,
    data: EnumServiceItem[],
    className?: any;
}

const DataTabs:React.FC<DataTabsProps> = ({className, isCustomTab, position, data, ...props }) => {

  return (
    <>
        <Tabs {...props} className={className}>            
            <TabList>
                {isCustomTab 
                    ? <>
                        {data.map((tab, index) => (
                            <CustomTab isCustomTab key={index} {...props}>
                                {tab.label}
                            </CustomTab>
                        ))}
                    </> 
                    : <>
                        {data.map((tab, index) => (
                            <CustomTab key={index}>
                                {tab.label}
                            </CustomTab>
                        ))}
                    </>
                }
            </TabList>
            { position && <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />}            
            <TabPanels className={`h-[calc(100%-2.5rem)] border-b border-l border-r bg-white rounded-b-md`}>
                {data.map((tab, index) => (
                    <TabPanel p={4} key={index} className=']'>
                        {tab.content} 
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    </>
  )
}

export default DataTabs;
