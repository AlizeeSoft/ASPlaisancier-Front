// TabIcon.types.ts

import { LucideIcon } from "lucide-react-native"
import { SvgProps } from "react-native-svg";

/**
 * Props pour le composant TabIcon
 */
export type TabIconProps = {
    icon: LucideIcon | React.FC<SvgProps>;
    size: number;
    color: string;
}