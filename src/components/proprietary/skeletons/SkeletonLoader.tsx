import Skeleton, { SkeletonProps } from "react-loading-skeleton";

const SkeletonLoader = (props: SkeletonProps) => (
  <div style={{ width: "100%" }}>
    <Skeleton {...props} />
  </div>
);

export default SkeletonLoader;
