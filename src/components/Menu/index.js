import React from 'react';

// import QRCode from 'react-native-qrcode-svg';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        {/* <QRCode
          value="https://rocketseat.com.br"
          size={80}
          bgColor="#fff"
          fgColor="#8b10ae"
        /> */}
      </Code>
    </Container>
  );
}
