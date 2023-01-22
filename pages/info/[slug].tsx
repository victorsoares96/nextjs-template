import { Info } from "@features/info";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import { wrapper } from "@store";

export const RepoInfoPage = () => {
  return <Info />;
};

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const username = context.query.owner;
  const repo = context.query.slug;

  if (typeof username === "string" && typeof repo === "string") {
    // This automatically creates a store instance which can be used in getServerSideProps or getInitialProps
    // Refer to https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering
    store.dispatch(
      repoInfoApi.endpoints.fetchRepoInfo.initiate({
        username,
        repo,
      })
    );
  }

  await Promise.all(store.dispatch(repoInfoApi.util.getRunningQueriesThunk()));

  return {
    props: {},
  };
});

export default RepoInfoPage;
