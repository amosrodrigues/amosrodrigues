import toast from 'react-hot-toast';
import copyImg from '../../assets/images/copy.svg';

import { StyledRoomCode } from './styles';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.success('Successfully copied!');
  }

  return (
    <StyledRoomCode>
      <button onClick={copyRoomCodeToClipboard} className="room-code">
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>Sala: {props.code}</span>
      </button>
    </StyledRoomCode>
  );
}