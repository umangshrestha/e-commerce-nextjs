import * as React from "react";

const LazyUserMenu = React.lazy(() => import("./UserMenu"));
export default LazyUserMenu;
