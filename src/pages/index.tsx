import Head from "next/head";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";
import Link from "next/link";

// https://www.to-r.net/media/react-tutorial14/
import React, { Component } from "react";

type Props = {};

type State = {
  todo: TodoItem[];
  currentText: string;
};

type TodoItem = {
  title: String;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      todo: [
        { title: "JavaScript覚える" },
        { title: "jQuery覚える" },
        { title: "ES2015覚える" },
        { title: "React覚える" },
      ],
      currentText: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      currentText: event.target.value,
    });
  }

  addTodo = () => {
    if (this.state.currentText.length === 0) return;

    this.state.todo.push({
      title: this.state.currentText,
    });

    this.setState({
      todo: this.state.todo,
      currentText: "",
    });
  };

  deleteTodo = (i: number) => {
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="https://nextjs.org">Next.js!</Link>
          </h1>
          <p>
            Do you want Hooks version? Click{" "}
            <Link href="/index-hooks">here!</Link>
          </p>
          <h1>TODOアプリ</h1>
          <nav className={todoStyles.todosel}>
            <ul className={todoStyles.todosellist}>
              <li className={todoStyles.todoselitem}>ぜんぶ</li>
              <li className={todoStyles.todoselitem}>期限間近</li>
              <li className={todoStyles.todoselitem}>期限切れ(やばい)</li>
              <li className={todoStyles.todoselitem}>期限未設定(やばい)</li>
              <li className={todoStyles.todoselitem}>完了</li>
            </ul>
          </nav>
          <ul className={todoStyles.todolist}>
            {this.state.todo.map((todo, i) => {
              return (
                <li key={i}>
                  <input
                    type="button"
                    value="☓"
                    onClick={() => this.deleteTodo(i)}
                  />
                  {todo.title}
                </li>
              );
            })}
          </ul>
          <input
            type="text"
            value={this.state.currentText}
            onChange={this.handleChange}
          />{" "}
          <input type="button" value="追加" onClick={this.addTodo} />
        </main>
      </div>
    );
  }
}

export default App;
