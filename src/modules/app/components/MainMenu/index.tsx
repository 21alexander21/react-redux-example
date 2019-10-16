import React from "react";
import { Button } from "@material-ui/core";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";
import routes from "../../../../routes";

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
);

const MainMenu = () => (
  <nav>
    {routes.map(({ path, menuLabel }) => {
      if (menuLabel && path) {
        return (
          <Button key={path} to={path} component={Link} color="inherit">
            {menuLabel}
          </Button>
        );
      }

      return null;
    })}
  </nav>
);

export default MainMenu;
