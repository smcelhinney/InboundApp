import styled from 'styled-components/native';

const ScreenContainer = styled.View `
  padding-top: 20;
  background-color: #A4A4A4;
  display: flex;
  flex: 1
`;

const GridImage = styled.Image `
  width: 52;
  height: 52;
`;

const GridCell = styled.View `
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-content: center;
  width: ${props => props.gridWidth};
  margin: ${props => props.gridMargin};
`;

// gridItem: {
//   flex: 1,
//   width: (Dimensions.get('window').width / 3) - (gridMargin * 2),
//   margin: gridMargin
// }

module.exports = {
  ScreenContainer,
  GridImage,
  GridCell
};
