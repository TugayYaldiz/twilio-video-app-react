import React from 'react';
import { styled } from '@material-ui/core/styles';

import Controls from '@components/Controls';
import LocalVideoPreview from '@components/LocalVideoPreview';
import MenuBar from '@components/MenuBar';
import ReconnectingNotification from '@components/ReconnectingNotification';
import Room from '@components/Room';

import useRoomState from '@hooks/useRoomState';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

const Main = styled('main')({
  height: '100%',
  position: 'relative',
});

export default function App() {
  const roomState = useRoomState();

  return (
    <Container>
      <MenuBar />
      <Main>
        {roomState === 'disconnected' ? <LocalVideoPreview /> : <Room />}
        <Controls />
      </Main>
      <ReconnectingNotification />
    </Container>
  );
}
