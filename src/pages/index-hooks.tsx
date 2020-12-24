import Head from "next/head";
import styles from "../styles/Home.module.css";
import todoStyles from "../styles/Todo.module.css";
import Link from "next/link";
import React, { useState } from "react";

type TodoItem = {
  title: String;
};

const Home = () => {
  const initialItems: TodoItem[] = [
    { title: "JavaScript覚える" },
    { title: "jQuery覚える" },
    { title: "ES2015覚える" },
    { title: "React覚える" },
  ];

  const [todoList, setTodoList] = useState(initialItems);
  const [currentText, setCurrentText] = useState("");

  const addTodo = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (currentText.length === 0) return;
    todoList.push({
      title: currentText,
    });
    setCurrentText("");
  };

  const deleteTodo = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

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
          Do you want Hooks version? Click
          <Link href="/">here!</Link>
        </p>
        <h1>TODOアプリ</h1>
        <ul className={todoStyles.todolist}>
          {todoList.map((todo, i) => {
            return (
              <li key={i}>
                <input type="button" value="☓" onClick={() => deleteTodo(i)} />
                {todo.title}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          value={currentText}
          onChange={(e) => {
            setCurrentText(e.target.value);
          }}
        />
        <input type="submit" value="追加" onClick={addTodo} />
        <input type="button" value="全消去" onClick={() => setTodoList([])} />
      </main>
    </div>
  );
};

export default Home;
