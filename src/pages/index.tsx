import type { NextPage } from "next";

import Layout from "components/Layout";
import TaskCounter from "components/Task/TaskCounter";
import TaskForm from "components/Task/TaskForm";
import TaskList from "components/Task/TaskList";

const Home: NextPage = () => {
  return (
    <Layout>
      <TaskCounter />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};

export default Home;
