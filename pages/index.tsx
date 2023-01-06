import { Recommendation } from "@app/features/repos/types";
import { Repos } from "@features/repos";
import React, { memo } from "react";
import { injectIntl } from "react-intl";
import { compose } from "redux";

interface ReposPageProps {
  recommendations?: Recommendation[];
}

export const ReposPage: React.FC<ReposPageProps> = ({ recommendations }) => {
  return <Repos recommendations={recommendations} />;
};

export async function getStaticProps() {
  // const recommendations = await getRecommendations();
  return {
    props: {
      // recommendations,
    },
  };
}

export default compose(injectIntl, memo)(ReposPage);
