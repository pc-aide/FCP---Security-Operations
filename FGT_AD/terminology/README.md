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
|9|Policy||Policy ID<br/><img src="https://i.imgur.com/m4m39vS.png"><br/>Adjusting Policy order<br/><img src="https://i.imgur.com/ImLuBky.png"><br/>Best Practices<br/><img src="https://i.imgur.com/15OqcYe.png"><br/>Inpection Mode Flow-based or Proxy-based<br/><img src="https://i.imgur.com/hNGZNwX.png"><br/>default disabled - so we enable it<br/><img src="https://i.imgur.com/wCE4eef.png"><br/>VIP - Matching Policies<br/><img src="https://i.imgur.com/DmQB5DE.png">|
|10|Logging||<img src="https://i.imgur.com/C5tgM2n.png"><br/>Monitor Traffic Logs<br/><img src="https://i.imgur.com/htOgVwa.png">|
|11|ISDB||<img src="https://i.imgur.com/4o8qnjR.png"><br/><img src="https://i.imgur.com/Lq1bfPL.png">|
|12|NAT|1.<ins>SNAT</ins><br/>2.<ins>DNAT</ins><br/>3.<ins>PAT</ins><br/>4.<ins>Port Forwarding</ins>|SNAT vs DNAT<br/><img src="https://i.imgur.com/g9lXcIh.png"><br/>DNAT<br/><img src="https://i.imgur.com/L3xPMJK.png"><br/>PAT<br/><img src="https://i.imgur.com/DwNeUrJ.png"><br/>Port forwarding<br/><img src="https://i.imgur.com/eIxvOYJ.png"><br/>NAT - FG eg<br/><img src="https://i.imgur.com/ei9JKlq.png"><br/>FW SNAT using the Outgoing interface<br/><img src="https://i.imgur.com/CaQtROD.png"><br/>IP Pools<br/><img src="https://i.imgur.com/71LQfVk.png"><br/>IP Pool Type - One-to-One<br/><img src="https://i.imgur.com/PNIETCO.png"><br/>IP Pool Type - Overload<br/><img src="https://i.imgur.com/M9rQrWL.png"><br/>VIPs<br/><img src="https://i.imgur.com/qOy2jmV.png"><br/>VIP eg SNAT - Incoming Connection<br/><img src="https://i.imgur.com/IYgf6m1.png"><br/>VIP eg - SNAT - Outgoing Connection<br/><img src="https://i.imgur.com/AXcmMVE.png"><br/>VIP eg - Port Forwarding - Incoming Connection<br/><img src="https://i.imgur.com/zUizujO.png"><br/>NAT Implementation Best Practices<br/><img src="https://i.imgur.com/rW5naTN.png">|
|13|ARP||<img src="https://i.imgur.com/wbwjs3t.png">|
|14|Routing||<img src="https://i.imgur.com/2wcb3D9.png"><br/>Route Lookup<br/><img src="https://i.imgur.com/EdVnqyq.png"><br/>Default route<br/><img src="https://i.imgur.com/RTbN1Xh.png"><br/>Default distance per route type<br/><img src="https://i.imgur.com/sJIvzHA.png"><br/><img src="https://i.imgur.com/EWibN1q.png"><br/>Priority<br/><img src="https://i.imgur.com/07m15IK.png">|
|15|Reverse Path Forwarding||<img src="https://i.imgur.com/MWBj6tw.png">|
|16|Configuring ECMP||<img src="https://i.imgur.com/AS6eWlt.png"><br/>ECMP eg<br/><img src="https://i.imgur.com/oUrlgch.png"><br/>Default ECMP algorithm vs SD-WAN ECMP algorithm<br/><img src="https://i.imgur.com/reSmuir.png">|
|17|Methods of FW auth||<img src="https://i.imgur.com/HS8OVBg.png"><br/>LDAP Overview<br/><br/>TCP port 389 - creds plain-text<br/>port 636 creds secure<img src="https://i.imgur.com/1ht8ol3.png"><br/>LDAP Structure<br/><img src="https://i.imgur.com/sg37l9O.png"><br/>Cfg an LDAP SRV on FG<br/><img src="https://i.imgur.com/Twktqxi.png"><br/>RADIUS Overview<br/><img src="https://i.imgur.com/Y32KjEr.png"><br/>Cfg a RADIUS<br/><img src="https://i.imgur.com/6VYAXcQ.png"><br/>Testing the LDAP & RADIUS Query on the CLI<br/><img src="https://i.imgur.com/bpXOxVv.png"><br/>2FA<br/><img src="https://i.imgur.com/1hrfQ5Z.png"><br/>OTP<br/><img src="https://i.imgur.com/1rUSaaf.png">|
