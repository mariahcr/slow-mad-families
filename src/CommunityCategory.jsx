import * as React from 'react';
import { TabPanel } from './Tabs';
import { AccordionSummary } from './styles/AccordionsStyles';
import { Accordion } from './styles/AccordionsStyles';
import { AccordionDetails } from './styles/AccordionsStyles';
import { StyledTypography } from './styles/AccordionsStyles';
import { Mode } from './PanelMode.ts'

export default function CommunityCategory({ mode, value }) {
    const communityDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget"
    if (mode === Mode.ACCORDION) {
        return (
            <Accordion>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <StyledTypography>COMMUNITY</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        {communityDescription}
                    </StyledTypography>
                </AccordionDetails>
            </Accordion>
        )
    } else {
        return (
            <TabPanel value={value} index={6}>
                {communityDescription}
            </TabPanel>
        )
    }
}