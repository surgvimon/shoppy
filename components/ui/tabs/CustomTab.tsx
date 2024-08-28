'use client'
import { Box, Button, Tab, UseTabProps, useMultiStyleConfig, useTab } from '@chakra-ui/react';
import React from 'react'

interface CustomTabProps extends UseTabProps{
    variant?: string;
    children: string;
    isFitted?: true,
    isCustomTab?: true;
}
const CustomTab :React.FC<CustomTabProps> = ({children, isCustomTab,  ...props}) => {
    const tabProps = useTab({ ...props})
    const isSelected = !!tabProps['aria-selected']
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return isCustomTab ? (
        <>
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='2'>
                    {isSelected ? '😎' : '😐'}
                </Box>
                {children} 
            </Button>
        </>
    ) : (<Tab className='bg-[#f6f6f6]' _selected={{ color: 'blue.500', bg: 'white' }}>{children}</Tab>)
}

export default CustomTab;