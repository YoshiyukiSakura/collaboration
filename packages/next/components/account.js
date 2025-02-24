import styled, { css } from "styled-components";
import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import {
  isEvmSelector,
  loginAccountSelector,
  loginAddressSelector,
  logout,
} from "store/reducers/accountSlice";
import { addressEllipsis } from "frontedUtils";
import Avatar from "./avatar";
import { p_14_medium } from "../styles/textStyles";
import { ReactComponent as UserIcon } from "../public/imgs/icons/user.svg";
import { shadow_200 } from "../styles/globalCss";
import { useIsMounted, useWindowSize } from "../frontedUtils/hooks";
import { fetchIdentity } from "services/identity";
import IdentityIcon from "@osn/common-ui/es/User/IdentityIcon";
import ButtonPrimary from "@osn/common-ui/es/styled/Button";
import {
  popUpConnect,
  setShowHeaderMenu,
  showConnectSelector,
  showHeaderMenuSelector,
} from "../store/reducers/showConnectSlice";
import { ChainIcon } from "@osn/common-ui";
import { evmChains } from "../frontedUtils/consts/chains";
import IdentityOrAddr from "@/components/identityOrAddr";

const ConnectModal = dynamic(() => import("./connect"), {
  ssr: false,
});

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    padding: 0;
    > :first-child {
      margin-top: 20px;
    }

    > :last-child {
      margin-bottom: 20px;
    }

    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${p_14_medium};

  div {
    display: flex;
    align-items: center;
    .ui--IdentityIcon {
      display: flex !important;
      align-items: center !important;
    }
  }

  > div > :first-child {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  > div > :nth-child(2) {
    margin-right: 4px;
  }

  .button,
  .connect {
    width: 100%;
  }
`;

const AccountWrapperPC = styled(AccountWrapper)`
  border: 1px solid #e2e8f0;

  :hover {
    border: 1px solid #b7c0cc;
  }

  ${(p) =>
    p.show &&
    css`
      border: 1px solid #b7c0cc;
    `}
  padding: 7px 15px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  cursor: auto;
  min-width: 240px;
  position: absolute;
  right: 0;
  top: 100%;
  background: #ffffff;
  border: 1px solid #f0f3f8;
  ${shadow_200};
  padding: 16px;
  padding-bottom: 8px;
  z-index: 1;
  @media screen and (max-width: 800px) {
    margin-top: 19px;
    border: none;
    box-shadow: none;
    width: 100%;
    position: initial;
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: 20px solid white;
  }

  .connect {
    margin: auto;
  }
`;

const MenuItem = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
`;

const MenuDivider = styled.div`
  height: 1px;
  background: #f0f3f8;
  margin: 12px 0;
`;

const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${p_14_medium};
  color: #506176;

  :hover {
    color: #1e2134;
  }
`;

const DarkButton = styled(ButtonPrimary)`
  @media screen and (max-width: 800px) {
    padding: 8px 16px;
    margin: auto;
    width: 100%;
    text-align: center;
  }
`;

const Shade = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.4;
`;

const IdentityWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;

  > :not(:first-child) {
    margin-left: 4px;
  }
`;

function Account({ space }) {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const windowSize = useWindowSize();
  const account = useSelector(loginAccountSelector);
  const showConnect = useSelector(showConnectSelector);
  const [pageMounted, setPageMounted] = useState(false);
  const [identity, setIdentity] = useState();
  const address = useSelector(loginAddressSelector);
  const isEvm = useSelector(isEvmSelector);
  const spaceSupportMultiChain = space?.networks?.length > 1;

  const showMenu = useSelector(showHeaderMenuSelector);

  useEffect(() => setPageMounted(true), []);

  useEffect(() => {
    setIdentity(null);

    if (
      account?.address &&
      account?.network &&
      !evmChains.includes(account.network)
    ) {
      fetchIdentity(account.network, account?.address)
        .then((identity) => {
          if (isMounted.current) {
            setIdentity(identity);
          }
        })
        .catch(() => {});
    }
  }, [account?.address, account?.network, isMounted]);

  if (!space) {
    return null;
  }

  const onSwitch = () => {
    dispatch(popUpConnect());
    dispatch(setShowHeaderMenu(false));
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(setShowHeaderMenu(false));
  };

  const ConnectWalletButton = (
    <div className="connect">
      {!account && (
        <DarkButton
          primary
          onClick={() => dispatch(popUpConnect())}
          className="button"
        >
          Connect Wallet
        </DarkButton>
      )}
    </div>
  );

  const Menu = (
    <MenuWrapper onClick={(e) => e.stopPropagation()}>
      {/*The dark connect button For Mobile only*/}
      {!account && windowSize.width <= 800 && ConnectWalletButton}
      {/*The dark connect button For Mobile only*/}
      {address && (
        <>
          <AccountWrapper>
            <div>
              <Avatar address={address} size={20} />
              {spaceSupportMultiChain && (
                <ChainIcon chainName={account?.network} size={16} />
              )}
              {!isEvm &&
              identity?.info &&
              identity?.info?.status !== "NO_ID" ? (
                <IdentityWrapper>
                  <IdentityIcon
                    status={identity.info.status}
                    size={spaceSupportMultiChain ? 12 : 14}
                  />
                  <div>{identity.info.display}</div>
                </IdentityWrapper>
              ) : (
                <>{addressEllipsis(address)}</>
              )}
            </div>
            <UserIcon />
          </AccountWrapper>
          <MenuDivider />
          <MenuItem>
            <LogoutWrapper onClick={onSwitch}>
              Switch Address
              <img src="/imgs/icons/switch.svg" alt="" />
            </LogoutWrapper>
          </MenuItem>
          <MenuItem>
            <LogoutWrapper onClick={onLogout}>
              Log out
              <img src="/imgs/icons/logout.svg" alt="" />
            </LogoutWrapper>
          </MenuItem>
        </>
      )}
    </MenuWrapper>
  );

  // show ConnectModal on first priority if  showConnect = true
  if (showConnect) {
    return <ConnectModal space={space} />;
  }

  // if already connected, show address on right top corner
  if (address && pageMounted) {
    return (
      <Wrapper>
        <AccountWrapperPC
          show={showMenu}
          onClick={() => {
            dispatch(setShowHeaderMenu(!showMenu));
          }}
        >
          <div>
            <Avatar address={address} size={20} />
            {spaceSupportMultiChain && (
              <ChainIcon chainName={account?.network} size={16} />
            )}
            <IdentityOrAddr identity={identity} addr={address}/>
          </div>
        </AccountWrapperPC>
        {showMenu && Menu}
        {showMenu && <Shade />}
      </Wrapper>
    );
  }

  // if no address connected, show ConnectButton on right top corner(PC only)
  if (windowSize.width > 800 && !account) {
    return ConnectWalletButton;
  }

  // show dropdown menu (Mobile only)
  if (showMenu) {
    return (
      <Wrapper>
        {Menu}
        <Shade />
      </Wrapper>
    );
  }

  return null;
}

export default memo(Account);
