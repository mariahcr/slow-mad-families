import * as React from 'react';
import { Mode } from './PanelMode.ts'
import SleepCategory from './SleepCategory';
import NutritionCategory from './NutritionCategory';
import ExerciseCategory from './ExerciseCategory';
import CommunityCategory from './CommunityCategory';
import NatureCategory from './NatureCategory';
import PurposeCategory from './PurposeCategory';
import SunlightCategory from './SunlightCategory';

export default function Accordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <SleepCategory mode={Mode.ACCORDION} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} />
            <NutritionCategory mode={Mode.ACCORDION} expanded={expanded === 'panel2'} onChange={handleChange('panel2')} />
            <ExerciseCategory mode={Mode.ACCORDION} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} />
            <CommunityCategory mode={Mode.ACCORDION} expanded={expanded === 'panel4'} onChange={handleChange('panel4')} />
            <SunlightCategory mode={Mode.ACCORDION} expanded={expanded === 'panel7'} onChange={handleChange('panel7')} />
            <PurposeCategory mode={Mode.ACCORDION} expanded={expanded === 'panel6'} onChange={handleChange('panel6')} />
            <NatureCategory mode={Mode.ACCORDION} expanded={expanded === 'panel5'} onChange={handleChange('panel5')} />
        </div>
    );
}