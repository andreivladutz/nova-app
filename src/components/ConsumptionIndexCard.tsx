import {
  PlasmicConsumptionIndexCard,
  DefaultConsumptionIndexCardProps,
} from "./plasmic/apa_nova_app/PlasmicConsumptionIndexCard";
import SkeletonLoader, {
  SkeletonLoaderProps,
} from "./proprietary/skeletons/SkeletonLoader";
export interface ConsumptionIndexCardProps
  extends DefaultConsumptionIndexCardProps {
  isLoading: boolean;
}

function ConsumptionIndexCard({
  isLoading,
  digitsInput,
  ...props
}: ConsumptionIndexCardProps) {
  const componentLoader = (
    key: string,
    skeletonProps: SkeletonLoaderProps
  ) => ({
    // @ts-expect-error
    render: (props, Component) =>
      isLoading ? (
        <SkeletonLoader key={`${key}-skeleton`} {...skeletonProps} />
      ) : (
        <Component key={`${key}-component`} {...props} />
      ),
  });

  return (
    <PlasmicConsumptionIndexCard
      {...props}
      freeBox={componentLoader("freeBox", {
        width: "20vw",
        count: 2,
        style: { marginBottom: "0.25rem" },
      })}
      digitsInput={
        isLoading ? (
          <SkeletonLoader
            key="digitsInput-skeleton"
            style={{ marginTop: "1rem" }}
          />
        ) : (
          digitsInput
        )
      }
    />
  );
}

export default ConsumptionIndexCard;
