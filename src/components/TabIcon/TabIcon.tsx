// TabIcon.tsx

import React from "react";

import { TabIconProps } from "./TabIcon.types";

const TabIcon: React.FC<TabIconProps> = ({ icon: Icon, size, color }) => {
    return (
        <Icon
            size={size}
            width={size}
            height={size}
            color={color}
            stroke={color}
        />
    );
};

export default React.memo(TabIcon);