var ddgksf2013 = JSON.parse($response.body);

// ========= 动态ID ========= //
var productidmap={
	"telegramChannel":"https://t.me/ddgksf2021",
	"填入bundle_id":"填入会员inapp信息中的product_id"
}
// ========= 固定部分 ========= //
ddgksf2013.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var inapp = {"product_id":"https://t.me/ddgksf2021","quantity":"1","expires_date":"2099-12-18 23:59:59 Etc/GMT","expires_date_pst":"2099-12-18 23:59:59 America/Los_Angeles","expires_date_ms":"4101292799000","is_in_intro_offer_period":"false","transaction_id":"100000000000000","is_trial_period":"false","original_transaction_id":"100000000000000","purchase_date_ms":"1701705599000","purchase_date":"2023-12-04 23:59:59 Etc/GMT","purchase_date_pst":"2023-12-04 23:59:59 America/Los_Angeles","original_purchase_date":"2023-12-04 23:59:59 Etc/GMT","original_purchase_date_pst":"2023-12-04 23:59:59 America/Los_Angeles","original_purchase_date_ms":"1701705599000","in_app_ownership_type":"PURCHASED","web_order_line_item_id":"100000000000000"};
var renew={"product_id":"https://t.me/ddgksf2021","original_transaction_id":"100000000000000","auto_renew_product_id = ":"https://t.me/ddgksf2021","auto_renew_status":"1"};
var mapid = ddgksf2013.receipt.bundle_id;
renew.product_id = productidmap[mapid];
renew.auto_renew_product_id = productidmap[mapid];
inapp.product_id = productidmap[mapid];
ddgksf2013.receipt.inapp = [inapp];
ddgksf2013.latest_receipt_info = [inapp];
ddgksf2013.latest_receipt = "https://t.me/ddgksf2021";
ddgksf2013.pending_renewal_info = [renew];
$done({ body: JSON.stringify(ddgksf2013) });