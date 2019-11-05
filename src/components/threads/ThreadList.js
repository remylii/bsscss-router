import React from "react";
import { Link } from "react-router-dom";

const ThreadList = props => {
  return (
    <section>
      <h1 className="section-title section-title-light">スレッド一覧</h1>
      <ul>
        {Object.keys(props.threads).map(key => {
          return (
            <li key={`thread-${props.threads[key].id}`}>
              <Link to={`/thread/${props.threads[key].id}`}>
                {props.threads[key].title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ThreadList;
