/*
彩云天气

====================================
[rewrite_local]
# 赏叶赏花
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\?app_name=weather url script-response-body https://raw.githubusercontent.com/CHENLY-1/Quantumult-X/main/Rewrites/cai.js
# 解锁vip
^https:\/\/biz\.cyapi\.cn\/v2\/user url script-response-body https://raw.githubusercontent.com/CHENLY-1/Quantumult-X/main/Rewrites/cai.js
# 卫星云图 48小时预报
^https:\/\/wrapper\.cyapi\.cn\/v1\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/CHENLY-1/Quantumult-X/main/Rewrites/cai.js

[mitm]
hostname = *.cyapi.cn
====================================
 */
var caixiaoyun = {},
    url = $request.url;
if (url.includes("/v2/user")) {
    let obj = JSON.parse($response.body);
    obj.result.is_vip = !0,
        obj.result.svip_expired_at = 3742732800,
        obj.result.vip_type = "s",
        caixiaoyun.body = JSON.stringify(obj)
}
if (/v1\/(satellite|nafp\/origin_images)/g.test(url)) {
    caixiaoyun.headers = $request.headers;
    caixiaoyun.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps';
}
if(url.includes('v1/activity')){
	let body = $response.body
	body = '{"status":"ok","activities":[{"items":[{}]}]}';
	caixiaoyun.body = body;
}
$done(caixiaoyun);

//let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNjc0MjI3MTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.wbgfCRp3W9zEvzEYsiWxerta4G-d-b0qlYCcilevOKY"; 