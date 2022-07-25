import React from 'react';

function ListItems(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <ul className="list-group">
        {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
        {props.item.map((item) => {
            return (
              // TODO: Your code here
              <li className="list-group-item" key={item.id}>
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  )
};

function List(props) {
  const purchased = [];
  const notPurchased = [];

  for (let item of props.groceries) {
    if (item.purchased) {
      purchased.push(item);
    } else {
      notPurchased.push(item);
    }
  }

  return (
    <>
      <ListItems item={purchased} title="Purchased" />
      <ListItems item={notPurchased} title="Not Purchased" />
    </>
  );
}

export default List;


