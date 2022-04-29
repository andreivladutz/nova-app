// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "../plasmic/apa_nova_app/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

import useAppNavigation from "../../hooks/useAppNavigation";
import useDefaultQueries from "../../hooks/useDefaultQueries";
import { useAppCtx } from "../../contexts/AppCtxProvider";

import downloadFile from "../../utils/downloadFile";
import { ROUTES, STYLING } from "../../utils/CONST";
import ButtonSkeleton from "../proprietary/skeletons/ButtonSkeleton";
import SkeletonLoader, {
  SkeletonLoaderProps,
} from "../proprietary/skeletons/SkeletonLoader";

const { SKELETON_PRIMARY_COLOR } = STYLING;

export const makeButtonLoader =
  (isLoading: boolean) =>
  (
    onClick: () => void,
    skeletonContainerStyle?: React.CSSProperties,
    skeletonProps?: SkeletonLoaderProps
  ) => ({
    // @ts-expect-error
    render: (props, Component) =>
      isLoading ? (
        <div style={{ width: "100%", ...skeletonContainerStyle }}>
          <ButtonSkeleton {...skeletonProps} />
        </div>
      ) : (
        <Component {...props} onClick={onClick} />
      ),
  });

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const { navigate } = useAppNavigation();
  const { userToken } = useAppCtx();
  const {
    latestBill: { data, isSuccess },
  } = useDefaultQueries(userToken);

  const isLoading = !isSuccess;

  const componentLoader = {
    // @ts-expect-error
    render: (props, Component) =>
      isLoading ? (
        <SkeletonLoader style={{ marginBottom: "0.25rem" }} />
      ) : (
        <Component {...props} />
      ),
  };

  const buttonLoader = makeButtonLoader(isLoading);

  return (
    <PlasmicHomepage
      root={{ ref }}
      {...props}
      emittedDate={data?.dateEmitted}
      total={data?.total}
      waterConsumption={data?.waterConsumption}
      dueDate={data?.dueDate}
      issueDateRow={componentLoader}
      paymentRow={componentLoader}
      totalConsumptionRow={componentLoader}
      dueDateRow={componentLoader}
      downloadBillBtn={buttonLoader(() =>
        downloadFile(data!.file, "factura-apanova")
      )}
      enterIdxBtn={buttonLoader(
        () => navigate(ROUTES.WATER_CONSUMPTION),
        {
          marginTop: "-2rem",
        },
        SKELETON_PRIMARY_COLOR
      )}
    />
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;