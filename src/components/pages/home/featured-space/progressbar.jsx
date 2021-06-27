import { jsx, Box } from 'theme-ui';
import Image from 'components/pages/home/featured-space/image';
import play from 'assets/images/icons/play.png';
import pause from 'assets/images/icons/pause.png';
import styled from '@emotion/styled';

const PlayButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  left: 50%;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  &:focus {
    outline: 0;
  }
`;

const ProgressbarWrapper = styled(Box)`
  background-color: #64d754;
  display: inline-flex;
  position: absolute;
`;

const Svg = styled.svg`
  height: 50px;
  width: 50px;
  max-width: 50px;
  transform: rotate(-90deg);
`;

const Circle = styled.circle`
  fill: transparent;
  stroke-width: 5px;
`;

const Progressbar = ({ currentWidth, togglePlay, handleClick, ...props }) => {
  let c = Math.PI * (35 * 2); // 35 is circle r's value
  let pct = ((100 - currentWidth) / 100) * c;

  return (
    <ProgressbarWrapper {...props}>
      <Svg viewBox='0 0 80 80'>
        <Circle
          cx={40}
          cy={40}
          r={35}
          fill='transparent'
          stroke='rgba(255,255,255,0.2)'
        ></Circle>
        <Circle
          cx={40}
          cy={40}
          r={35}
          stroke='#fff'
          strokeDashoffset={pct}
          strokeDasharray={230}
        ></Circle>
      </Svg>
      <PlayButton onClick={handleClick}>
        <Image
          style={{ marginLeft: togglePlay ? '3px' : 0 }}
          src={togglePlay ? play : pause}
          alt='play pause icon'
        />
      </PlayButton>
    </ProgressbarWrapper>
  );
};

export default Progressbar;
