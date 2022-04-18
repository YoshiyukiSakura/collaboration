import { memo } from "react";
import Button from "@osn/common-ui/dist/styled/Button";
import Metamask from "./metamask.svg";
import Polkadot from "./polkadot.svg";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAccount } from "../../../store/reducers/accountSlice";
import {
  closeConnect,
  setShowHeaderMenu,
} from "../../../store/reducers/showConnectSlice";
import { registerMetaMaskEventHandlers } from "../../../services/metamask";

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

function ConnectButton({ address, network, isMetamask = false }) {
  const dispatch = useDispatch();

  return (
    <Button
      primary
      onClick={() => {
        dispatch(
          setAccount({
            address,
            network: network,
          })
        );
        dispatch(closeConnect());
        dispatch(setShowHeaderMenu(false));

        registerMetaMaskEventHandlers();
      }}
    >
      <Wrapper>
        {isMetamask ? <Metamask /> : <Polkadot />}
        Connect
      </Wrapper>
    </Button>
  );
}

export default memo(ConnectButton);
