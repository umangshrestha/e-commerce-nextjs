import * as React from "react";

const LazyProductList = React.lazy(() => import("./ProductList"));
export default LazyProductList;
