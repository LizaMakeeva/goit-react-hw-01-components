import {
  WrapperTabl,
  TopicTable,
  Text,
  ColumnType,
  ColumnAmount,
  ColumnCurrency,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <WrapperTabl>
      <thead>
        <TopicTable>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TopicTable>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <Text
            style={{
              backgroundColor: index % 2 !== 0 ? '#9e9e9e' : '#ffffff',
            }}
            key={item.id}
          >
            <ColumnType>{item.type}</ColumnType>
            <ColumnAmount>{item.amount}</ColumnAmount>
            <ColumnCurrency>{item.currency}</ColumnCurrency>
          </Text>
        ))}
      </tbody>
    </WrapperTabl>
  );
};
