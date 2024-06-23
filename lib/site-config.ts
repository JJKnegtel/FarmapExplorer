export const siteConfig = {
  pageTitle: 'FarMap',
  pageDescription:
    'Powering Discoverability of Assets, Products, and Services in Web3.',
  filterByProductIds: [87, 88, 129], // used to filter on top of the user filters. Filters the products in the main list but also the filter options of (productSupports, productDeployedOnFilter and assetDeployedOnFilter)
  blockhainIds: [87, 88, 129, 21], // used to filter on top of the user filters. Filters the products in the main list but also the filter options of (productSupports, productDeployedOnFilter and assetDeployedOnFilter)
  blockchainProductTypeIds: [15, 16, 17] // used to filter default options. used by productDeployedOnFilter.
};
