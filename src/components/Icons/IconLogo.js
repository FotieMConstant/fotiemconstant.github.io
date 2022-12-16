/* eslint-disable max-len */
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const IconLogo = ({ theme, width = 36.581, height = 50.186, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 37 37" {...props}>
      <g fill={theme.brand.primary}>
        <path
          d="M5 3H7V5H5V10C5 10.5304 4.78929 11.0391 4.41421 11.4142C4.03914 11.7893 3.53043 12 3 12C3.53043 12 4.03914 12.2107 4.41421 12.5858C4.78929 12.9609 5 13.4696 5 14V19H7V21H5C3.93 20.73 3 20.1 3 19V15C3 14.4696 2.78929 13.9609 2.41421 13.5858C2.03914 13.2107 1.53043 13 1 13H0V11H1C1.53043 11 2.03914 10.7893 2.41421 10.4142C2.78929 10.0391 3 9.53043 3 9V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9C21 9.53043 21.2107 10.0391 21.5858 10.4142C21.9609 10.7893 22.4696 11 23 11H24V13H23C22.4696 13 21.9609 13.2107 21.5858 13.5858C21.2107 13.9609 21 14.4696 21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17V19H19V14C19 13.4696 19.2107 12.9609 19.5858 12.5858C19.9609 12.2107 20.4696 12 21 12C20.4696 12 19.9609 11.7893 19.5858 11.4142C19.2107 11.0391 19 10.5304 19 10V5H17V3H19ZM12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15M8 15C8.26522 15 8.51957 15.1054 8.70711 15.2929C8.89464 15.4804 9 15.7348 9 16C9 16.2652 8.89464 16.5196 8.70711 16.7071C8.51957 16.8946 8.26522 17 8 17C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15ZM16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15V15Z"
          fill="#FF6900"
        />
      </g>
    </svg>
  );
};

IconLogo.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default withTheme(IconLogo);
