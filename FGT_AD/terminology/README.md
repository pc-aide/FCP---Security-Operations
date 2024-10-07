# terminology

---

## List
|n|name|desc.|O/P|
|-|----|-----|---|
|1|VLANs|Logically subdivide your physical layer 2 network into smaller segments<br/> * Each segment forms a separate broadcast domain<br/>* VLAN tags added to frames to identify their network segments
|2|VDOMs|* VDOMs split FG into multiple virtual device<br/>** They employ independent security policies, routing tables, & so on<br/>* Packets are confined to same VDOM<br/>* By default, FG supports up to 10 VDOMs<br/>** High-end models allow for the purchase of additional VDOMs|default - disabled<br/><img src="https://i.imgur.com/1HUdLjd.png"><br/>VDOM enabled<br/><img src="https://i.imgur.com/vnXnJY0.png">|
|3|Trusted hosts||<img src="https://i.imgur.com/1xMUQv4.png"><br/><img src="https://i.imgur.com/wYD9v1a.png">|
|4|cfg file format - yaml or default format||<img src="https://i.imgur.com/yNJgUsk.png">|
|5|FrotiGuard Subscription Services||<img src="https://i.imgur.com/iH8Rm0Q.png"><br/><img src="https://i.imgur.com/YSyvGye.png"><br/><img src="https://i.imgur.com/uLKhFl5.png">|
|6|Features|Allow Unnamed policies<br/>Multiple interfaces|<img src="https://i.imgur.com/MZOcvvP.png"><br/><img src="https://i.imgur.com/bbSv4Zr.png">|
|7|how are policy matches determined?||<img src="https://i.imgur.com/CE9UFOR.png">|
|8|Security Profiles||<img src="https://i.imgur.com/F8GRhwq.png">|
|9|Policy||Policy ID<br/><img src="https://i.imgur.com/m4m39vS.png"><br/>Adjusting Policy order<br/><img src="https://i.imgur.com/ImLuBky.png"><br/>Best Practices<br/><img src="https://i.imgur.com/15OqcYe.png"><br/>Inpection Mode Flow-based or Proxy-based<br/><img src="https://i.imgur.com/hNGZNwX.png"><br/>default disabled - so we enable it<br/><img src="https://i.imgur.com/wCE4eef.png">|
|10|Logging||<img src="https://i.imgur.com/C5tgM2n.png"><br/>Monitor Traffic Logs<br/><img src="https://i.imgur.com/htOgVwa.png">|
|11|ISDB||<img src="https://i.imgur.com/4o8qnjR.png"><br/><img src="https://i.imgur.com/Lq1bfPL.png">|
|12|NAT|1.<ins>SNAT</ins><br/>2.<ins>DNAT</ins><br/>3.<ins>PAT</ins><br/>4.<ins>Port Forwarding</ins>|SNAT vs DNAT<br/><img src="https://i.imgur.com/g9lXcIh.png"><br/>DNAT<br/><img src="https://i.imgur.com/L3xPMJK.png"><br/>PAT<br/><img src="https://i.imgur.com/14yBlOF.png">|
