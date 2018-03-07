import glamorous from 'glamorous';

export const TopBar = glamorous.div({
  background: '#5661B3',
  height: '5px'
});

export const FlexContainer = glamorous.ul(
  {
    padding: '1rem 4.5rem 1rem 4.5rem',
    display: 'flex',
    backgroundImage: 'linear-gradient(90deg, #FFFCE9 30%, #FBF2FF 80%)',
    borderBottom: '1px solid #F5E5FC',
    marginBottom: '2rem'
  },
  ({ alignItems }) => ({
    alignItems: alignItems
  })
);

export const Right = glamorous.li({
  marginLeft: 'auto'
});

export const Left = glamorous.li({
  alignSelf: 'flex-start',
  display: 'flex',
  alignItems: 'baseline'
});
