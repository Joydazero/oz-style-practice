import styled from "styled-components";

export default function Header() {
  const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    flex-wrap: nowrap;
    padding: 20px 20px;
    background-color: black;
  `

  const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: nowrap;
  `
  const MenuContainerLi = styled.li`
    font-size: 16px;
    font-weight: 400;
    list-style: none;
    `
  const HeaderTitle = styled.h1`
    font-size:32px;
    font-weight:700;  
    @media (max-width: 768px) {
      font-size:26px;
    }
  `
  return (
    <HeaderContainer className="header-container">
      <HeaderTitle>OZ코딩스쿨</HeaderTitle>
      <MenuContainer>
        <MenuContainerLi>로그인</MenuContainerLi>
        <MenuContainerLi>회원가입</MenuContainerLi>
        <MenuContainerLi>내클래스</MenuContainerLi>
      </MenuContainer>
    </HeaderContainer>
  );
}
