import React, { Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <div className="wrapp__app">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{<Routes />}</Suspense>
      </Layout>
    </div>
  );
};

export default App;
