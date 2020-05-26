import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const FontSizeIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg viewBox="8 8 16 16" role="presentation" focusable="false" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M22.972 21.336l-4-11.5a.5.5 0 0 0-.944 0L14.51 19.949l-2.036-6.107a.5.5 0 0 0-.948 0l-2.5 7.5a.5.5 0 1 0 .948.316l.386-1.158h3.28l.386 1.158c.004.012.012.021.017.033.008.02.019.038.03.057.02.035.043.066.07.094a.495.495 0 0 0 .173.119c.008.003.012.008.02.011h.004a.496.496 0 0 0 .16.028c.006 0 .011-.003.017-.003.021 0 .04-.006.06-.01.028-.004.054-.004.081-.013.01-.003.017-.011.026-.015a.485.485 0 0 0 .092-.053c.025-.017.05-.032.072-.054.022-.021.038-.046.056-.072a.49.49 0 0 0 .052-.09c.004-.009.012-.016.016-.026L16.247 18h4.506l1.275 3.664a.5.5 0 1 0 .944-.328zM10.694 19.5L12 15.581l1.306 3.919h-2.612zm5.9-2.5l1.906-5.478L20.405 17h-3.81z"
      />
      <path
        className={cx(iconClassNames.filled, classes.filledPart)}
        d="M23.445 21.171l-4-11.5a1 1 0 0 0-1.89 0l-3.035 8.727-1.571-4.714a1 1 0 0 0-1.898 0l-2.5 7.5a1 1 0 0 0 1.898.632L10.72 21h2.558l.272.816c.004.01.011.018.015.028.033.09.075.176.132.253l.005.006a.995.995 0 0 0 .194.19l.048.034c.07.047.143.089.226.118l.015.003c.012.004.024.005.035.009a.992.992 0 0 0 .246.038c.011 0 .022.005.033.005.006 0 .013-.003.02-.003a.992.992 0 0 0 .278-.045l.018-.003c.017-.006.032-.015.048-.022a.987.987 0 0 0 .267-.155 1.016 1.016 0 0 0 .288-.387c.008-.02.019-.036.026-.056l1.157-3.329h3.796l1.157 3.329a1 1 0 0 0 1.89-.658zM11.387 19L12 17.162 12.613 19h-1.226zm5.91-2.5l1.203-3.456 1.202 3.456h-2.404z"
      />
    </svg>
  ),
  displayName: 'FontSizeIcon',
});

export default FontSizeIcon;