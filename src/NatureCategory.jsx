import * as React from 'react';
import { TabPanel } from './Tabs';
import { AccordionSummary } from './styles/AccordionsStyles';
import { Accordion } from './styles/AccordionsStyles';
import { AccordionDetails } from './styles/AccordionsStyles';
import { StyledTypography } from './styles/AccordionsStyles';
import { Mode } from './PanelMode.ts'

export default function NatureCategory({ mode, value }) {
    const natureDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget"

    if (mode === Mode.ACCORDION) {
        return (
            <Accordion>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <StyledTypography>NATURE</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>
                        {natureDescription}
                    </StyledTypography>
                </AccordionDetails>
            </Accordion>
        )
    } else {
        return (
            <TabPanel value={value} index={3}>
                {natureDescription}
            </TabPanel>
        )
    }
}