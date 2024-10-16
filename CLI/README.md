# CLI

---

## diagnose
|n|name|eg|O/P|
|-|----|--|---|
|1|FortiGuard Lic|`diagnose autoupdate version`|<img src="https://i.imgur.com/ICUxAP6.png">|
|2|rating|`diagnose debug rating`|<img src="https://i.imgur.com/G6iMJD3.png">|
|3|debug - vpn ssl|`diagnose debug enable`<br/>`diagnose vpn ssl`|
|4|vpn tunnel|`diagnose vpn tunnel ?`|IPsec SA mgmt<br/><img src="https://i.imgur.com/m0LrgRy.png"><br/>list<br/><img src="https://i.imgur.com/NtxbOz0.png">|
|5|ike gw list|`diagnose vpn ike gateway list name <yourNameVPN>`|<img src="https://i.imgur.com/L9hSQwj.png">|
|6|session list|`diagnose sys session list`|<img src="https://i.imgur.com/laGJQzX.png">|
|7|check cfg sync|`diagnose sys ha cheksum show`<br/><br/>`diagnose sys ha checksum cluster`<br/><br/>`diagnose sys ha checksum recalculate`|
|8|top process|`diagnose sys top`|<img src="https://i.imgur.com/aQc7a0E.png"><br/><img src="https://i.imgur.com/xqSdhtq.png">|
|9|conserver mode|`diagnose hardware sysinfo conserve`|<img src="https://i.imgur.com/83j07XY.png"><br/><img src="https://i.imgur.com/bbrgLq8.png">|

---

## config
|n|name|eg|O/P|
|-|----|--|---|
|1|proxy-inspection|`config system settings`<br/>`set gui-proxy-inspection enable`<br/>`end`|<img src="https://i.imgur.com/Fp3YBoR.png">|

---

## get
|n|name|eg|O/P|
|-|----|--|---|
|1|RIB|`get router info kernel`|<img src="https://i.imgur.com/a6eLnVV.png">|
|2|routin table|`get router info routing-table all`|<img src="https://i.imgur.com/16ilDvN.png">|
|3|performance|`get system performance status`|<img src="https://i.imgur.com/mP2KGfp.png">|
|4|hardware|`get hardware status`|VM<br/><img src="https://i.imgur.com/bLZ9jv5.png"><br/>physical<br/><img src="https://i.imgur.com/uQAg0CV.png">|
|5|tunnel detail|`get vpn ipec tunnel details`|<img src="https://i.imgur.com/qeuKJk9.png">|
|6|ha|`get system ha status`|

---

## execute
|n|name|eg|O/P|
|-|----|--|---|
|1|ping-options|`execute ping-options`||
