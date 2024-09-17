import * as React from "react";

const LazyProduct = React.lazy(() => import("./Product"));
export default LazyProduct;
