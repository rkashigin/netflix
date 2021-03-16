import React from "react";
import ReactDOM from "react-dom";

import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = React.createContext(null);

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = React.useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = React.useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          {...restProps}
          onClick={({ target }) => {
            if (target.id !== "netflix-player") {
              setShowPlayer(false);
            }
          }}
          data-testid="player"
        >
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = React.useContext(PlayerContext);

  return (
    <Button
      {...restProps}
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
    >
      Play
    </Button>
  );
};
