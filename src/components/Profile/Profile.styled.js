import styled from 'styled-components';
export const Wrapper = styled.div`
  margin: auto;
  overflow: hidden;
  width: 600px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.3);
`;
export const Description = styled.div``;

export const TopicName = styled.p`
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;
export const ImgAvatar = styled.img`
  width: 450px;
  border-radius: 50%;
  margin: 20px;
`;
export const Text = styled.p`
  font-size: 30px;
  text-align: center;
`;
export const TextLabel = styled.span`
  font-size: 30px;
`;
export const TextQuantity = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
export const ListStats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
`;
export const ListLi = styled.li`
  padding: 40px 0;
  width: 100%;
  background-color: #9e9e9e47;
  border: 1px solid #9e9e9e;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
  align-items: center;
`;
