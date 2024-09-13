import React, { useEffect, useState } from "react";
import "./styles/KanbanBoard.css";
import Navbar from "./Navbar";
import Title from "./HeadingTape";
import Card from "./Card";
import Order from "./Order";
import DATA from "./getItems";

const KanbanBoard = () => {
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "title"
  );

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
  }, [ordering]);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    if (grouping === "priority") {
      setOrdering("title");
    }
  }, [grouping]);
  return (
    <div className="page">
      <Navbar
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
      <div className="board">
        {DATA[grouping].map((group) => {
          return (
            <div className="group-column">
              <Title
                title={group.title}
                grouping={grouping}
                count={group.tickets.length}
                available={
                  grouping === "user"
                    ? DATA.users.filter((e) => e.name === group.title)[0]
                        .available
                    : null
                }
              />
              {Order(group.tickets, ordering).map((item) => {
                return (
                  <Card
                    ticket={item}
                    grouping={grouping}
                    user={DATA.users.filter((e) => e.id === item.userId)[0]}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
