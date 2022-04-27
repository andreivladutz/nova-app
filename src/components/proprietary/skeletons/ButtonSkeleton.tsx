import { SkeletonProps } from "react-loading-skeleton";
import SkeletonLoader from "./SkeletonLoader";

const ButtonSkeleton = (props: SkeletonProps) => (
  <SkeletonLoader {...props} height="3rem" borderRadius="999px" />
);

export default ButtonSkeleton;
