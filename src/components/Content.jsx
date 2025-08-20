import styled from "styled-components";

export default function Content({ content }) {
  const CategoryIcon = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${ ({ now }) =>   now === "모집중" ? "#d7fa00" : "#cbccca" };
    border: ${ ({ now }) =>   now === "모집중" ? "1px solid #d7fa00" : "1px solid #cbccca" };
    padding: 4px 5px;
    border-radius: 3px;
    `

    const ContentTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    `
    
    const ContentSubTitle = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: rgb(160, 160, 160);
    `

    const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 5px;
    flex-wrap: nowrap;
    `

    const ContentImg = styled.img`
      width: 300px;
      border-radius: 10px;
      margin-bottom: 3px;
      min-height: 225px;
    `
  return (
    <ContentContainer>
      <ContentImg src={content.img} alt={content.title}></ContentImg>
      <CategoryIcon  now={content.now} >{content.now}</CategoryIcon>
      <ContentTitle>{content.title}</ContentTitle>
      <ContentSubTitle>{content.subtitle}</ContentSubTitle>
    </ContentContainer>
  );
}
