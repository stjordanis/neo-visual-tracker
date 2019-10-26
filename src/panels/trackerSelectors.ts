// DOM query selectors for various elements in the tracker.html template:

const trackerSelectors = {
    AllPages: '.page',
    StatusBar: '.status-bar',
    BlockHeight: '#blockHeight',
    RpcUrl: '#rpcUrl',
    RpcStatus: '#rpcStatus',
    HideEmptyBlocksCheckbox: '#hideEmpty',
    BlocksTableBody: '#blocks tbody',
    BlocksPaginationFirst: '#blocks .first',
    BlocksPaginationNext: '#blocks .next',
    BlocksPaginationPrevious: '#blocks .previous',
    BlocksPaginationLast: '#blocks .last',
    BlockDetailClose: '#blockdetail .close',
    BlockDetailHash: '#blockdetail .hash',
    BlockDetailIndex: '#blockdetail .index',
    BlockDetailTime: '#blockdetail .time',
    BlockDetailValidator: '#blockdetail .validator',
    BlockDetailSize: '#blockdetail .size',
    BlockDetailVersion: '#blockdetail .version',
    BlockDetailMerkleRoot: '#blockdetail .merkleRoot',
    BlockDetailTransactions: '#blockdetail .transactions',
    BlockDetailTransactionsTable: '#blockdetail .txs',
    BlockDetailPreviousLink: '#blockdetail .previous',
    BlockDetailNextLink: '#blockdetail .next',
    TransactionDetailClose: '#transactiondetail .close',
    TransactionDetailType: '#transactiondetail .type',
    TransactionDetailHash: '#transactiondetail .hash',
    TransactionDetailTime: '#transactiondetail .time',
    TransactionDetailNetworkFee: '#transactiondetail .networkFee',
    TransactionDetailSystemFee: '#transactiondetail .systemFee',
    TransactionDetailSize: '#transactiondetail .size',
    TransactionDetailBlock: '#transactiondetail .block',
    TransactionValueTransferTable: '#transactiondetail #value-transfer',
    TransactionDetailInputsClaimsTable: '#transactiondetail .inputsClaims',
    TransactionDetailOutputsTable: '#transactiondetail .outputs',
    TransactionScriptsTable: '#transactiondetail #scripts',
    TransactionScriptsTableBody: '#transactiondetail #scripts .script-rows',
    TransactionMainScriptArea: '#transactiondetail #main-script',
    TransactionMainScriptBody: '#transactiondetail #main-script .script-body',
    AddressDetailsClose: '#addressdetail .close',
    AddressDetailsHash: '#addressdetail .hash',
    AddressDetailsUnspentAssetTemplate: '#unspentAssetTemplate',
    AddressDetailsUnspentAssetName: '.assetName',
    AddressDetailsGetUnspentsSupported: '#addressdetail .unspentsSupported',
    AddressDetailsGetUnspentsNotSupported: '#addressdetail .unspentsNotSupported',
    LoadingIndicator: '#loading-indicator',
    LoadingMessage: '#loading-indicator .message',
    OpeningIndicator: '#opening-indicator',
};

export { trackerSelectors };