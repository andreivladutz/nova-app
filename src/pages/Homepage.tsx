// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  PlasmicHomepage,
  DefaultHomepageProps,
} from "../components/plasmic/apa_nova_app/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { ROUTES } from "../utils/CONST";
import useAppNavigation from "../hooks/useAppNavigation";

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const { navigate } = useAppNavigation();

  return (
    <PlasmicHomepage
      root={{ ref }}
      {...props}
      // cardWall={{
      //   render: () => (
      //     <CardWall
      //       cardTitle="Ultima factură a fost emisă"
      //       cardContent={<PlasmicHomepage.text />}
      //     />
      //   ),
      // }}
      enterIdxBtn={{
        onClick() {
          navigate(ROUTES.WATER_CONSUMPTION);
        },
      }}
    />
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;