import {
  Wrapper,
  Topic,
  ListStat,
  ListItem,
  TextPercentage,
  TextLabel,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title }) => {
  return (
    <Wrapper>
      {title && <Topic>{title}</Topic>}
      <ListStat>
        {stats.map(dat => (
          <ListItem
            style={{ backgroundColor: getRandomHexColor() }}
            key={dat.id}
          >
            <TextLabel>{dat.label}</TextLabel>
            <TextPercentage>{dat.percentage}%</TextPercentage>
          </ListItem>
        ))}
      </ListStat>
    </Wrapper>
  );
};
