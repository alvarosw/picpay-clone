import styled from "styled-components";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 22,
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 130px;
`;

export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;

export const Img = styled.Image`
  align-self: center;
`;

export const Label = styled.Text`
  color: white;
  font-weight: bold;
  margin-top: 8px;
  font-size: 14px;
  text-align: center;
`;
