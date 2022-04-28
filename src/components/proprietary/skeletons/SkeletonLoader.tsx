import Skeleton, { SkeletonProps } from "react-loading-skeleton";

export type SkeletonLoaderProps = SkeletonProps & {
  containerStyle?: React.CSSProperties;
};

const SkeletonLoader = (props: SkeletonLoaderProps) => (
  <div style={{ width: "100%", ...props.containerStyle }}>
    <Skeleton {...props} />
  </div>
);

export default SkeletonLoader;
