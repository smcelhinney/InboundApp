import styled from 'styled-components/native';

const ScreenContainer = styled.View `
  padding-top: 20;
  background-color: #949494;
  display: flex;
  flex: 1
`;

const GridImage = styled.Image `
  width: 46;
  height: 46;
`;

const GridCell = styled.View `
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: ${props => props.gridWidth};
  margin: ${props => props.gridMargin};
`;

const GridText = styled.Text`
  margin-top: 10
`;

module.exports = {
  ScreenContainer,
  GridImage,
  GridCell,
  GridText
};
