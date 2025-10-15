import React from 'react';
import { BaseIcon, BaseIconProps } from './BaseIcon';

interface IconProps extends Omit<BaseIconProps, 'children' | 'viewBox'> {}

export const BriefcaseIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <BaseIcon size={size} color={color} viewBox="0 0 21 18" {...props}>
      <path
        d="M12.9432 10.4061H20.4431V16.031C20.4431 17.0666 19.6036 17.906 18.5681 17.906H2.31833C1.2828 17.906 0.443359 17.0666 0.443359 16.031V10.4061H7.94326V11.1874C7.94326 11.4462 8.15314 11.6561 8.412 11.6561H12.4744C12.7333 11.6561 12.9432 11.4462 12.9432 11.1874V10.4061ZM20.4431 6.03117V9.15613H0.443359V6.03117C0.443359 4.99564 1.2828 4.1562 2.31833 4.1562H5.44329V2.28122C5.44329 1.24569 6.28273 0.40625 7.31826 0.40625H13.5682C14.6037 0.40625 15.4432 1.24569 15.4432 2.28122V4.1562H18.5681C19.6036 4.1562 20.4431 4.99564 20.4431 6.03117ZM12.9432 2.90622H7.94326V4.1562H12.9432V2.90622Z"
        fill={color}
      />
    </BaseIcon>
  );
};
