import glamorous from 'glamorous';

export const TopBar = glamorous.div({
  background: '#5661B3',
  height: '5px'
});

export const HeaderFlex = glamorous.ul(
  {
    padding: '1rem 4.5rem 1rem 4.5rem',
    display: 'flex',
    backgroundImage: 'linear-gradient(90deg, #FFFCE9 30%, #FBF2FF 80%)',
    borderBottom: '1px solid #F5E5FC',
    marginBottom: '2rem'
  },
  ({ alignItems, justifyContent }) => ({
    alignItems: alignItems,
    justifyContent: justifyContent
  })
);

export const FlexContainer = glamorous.div({
  alignItems: 'baseline',
  display: 'flex'
});

export const Right = glamorous.div({
  marginLeft: 'auto'
});

export const Left = glamorous.li({
  alignSelf: 'flex-start',
  display: 'flex',
  alignItems: 'baseline'
});

export const BodyText = glamorous.p(
  {
    lineHeight: '1.5',
    maxWidth: '590px'
  },
  ({ darkBackground }) =>
    darkBackground ? { color: '#E6E8FF' } : { color: '#606F7B' }
);

export const HeaderText = glamorous.p(
  { fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase' },
  ({ darkBackground }) =>
    darkBackground ? { color: '#FECA57' } : { color: '#5661B3' }
);

export const SectionIntro = glamorous.h1({
  fontWeight: '200',
  fontSize: '1.875rem',
  color: '#4A4A4A',
  textAlign: 'center'
});
