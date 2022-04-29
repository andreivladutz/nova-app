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
  nth: number;
}

function ConsumptionIndexCard({
  isLoading,
  nth,
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
      key={`plasmic-consumption-card-${nth}`}
      freeBox={componentLoader(`freeBox-${nth}`, {
        width: "20vw",
        count: 2,
        style: { marginBottom: "0.25rem" },
      })}
      digitsInput={
        isLoading ? (
          <SkeletonLoader
            key={`digitsInput-skeleton-${nth}`}
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
