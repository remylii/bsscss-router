import React from "react";
import { Route } from "react-router-dom";

import ThreadList from "./threads/ThreadList";
import ThreadDetail from "./threads/ThreadDetail";

class Thread extends React.Component {
  constructor(props) {
    super(props);

    const initiailizeState = {
      threads: {
        general: {
          id: "general",
          title: "全体周知する場所",
          comments: []
        },
        random: {
          id: "random",
          title: "雑談場所",
          comments: [
            {
              id: 1,
              author: "Dockerに魂を引かれた人",
              password: "default",
              message:
                "コンテナの状態には、(created|restarting|removing|running|paused|exited) があるらしいが、docker container ls で表示される",
              datetime: "2019/10/30 14:30:00"
            },
            {
              id: 2,
              author: "色相環おじさん",
              password: "default",
              message:
                "色相環は虚構のシステムである。（あと色立体も）なので参考にするのは良いけど、色相環にとらわれてばかりいると、思考の幅が狭くなる。色というのはまわりを見渡すだけでも一杯ある。色相環にある色ばかりが色ではない",
              datetime: "2019/10/30 14:30:00"
            }
          ]
        }
      }
    };

    const localData = localStorage.getItem("sample");
    // const localData = null;
    this.state = localData ? JSON.parse(localData) : initiailizeState;

    this.findThreadById = this.findThreadById.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  findThreadById(id) {
    console.log(this.state);
    return this.state.threads[id];
  }

  addComment(id, payload) {
    const thread = this.findThreadById(id);
    const latestId =
      thread.comments.length === 0
        ? 1
        : thread.comments[thread.comments.length - 1].id + 1;

    const newComments = thread.comments.concat({
      ...payload,
      id: latestId
    });

    const threads = this.state.threads;
    threads[id].comments = newComments;

    this.setState({
      threads: threads
    });

    localStorage.setItem("sample", JSON.stringify({ threads: threads }));
  }

  render() {
    return (
      <div>
        <Route exact path="/thread">
          <ThreadList threads={this.state.threads} />
        </Route>
        <Route path="/thread/:id">
          <ThreadDetail
            match={this.props.match}
            threads={this.state.threads}
            findThreadById={this.findThreadById}
            addComment={this.addComment}
          />
        </Route>
      </div>
    );
  }
}

export default Thread;
