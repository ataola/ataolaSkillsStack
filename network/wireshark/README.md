# WireShark抓包

## OSI 七层模型

* #### 物理层

* #### 数据链路层

* #### 网络层

    **Protocol:** ICMP, IGMP, IP(IPV4, IPV6)

* #### 传输层

    **Protocol:** TCP, UDP

* #### 会话层

* #### 表示层

* #### 应用层

    **Protocol：** HTTP FTP TFTP SMTP SNMP DNS TELNET HTTPS POP3 DHCP


## 类别浏览

* #### Authentication认证

    * ###### 802.1X(Protocol EAP)

        在Ethernet II中，前个6位xx表示Destination,例如 01:80:c2:00:00:03
        后6个xx表示Source,例如 00:19:06:ea:b8:8c
        再后面两个xx表示，type是 802.1X， 0X888e
        中间隔了一段802.1X，包含了version，Type和Lenght以及扩展，这里看着是9个xx，然后全是padding 00

    * ###### BGP_MD5(Protocol BGP)

        TCP的三次握手，192.168.100.1 发送了一个SYN给192.168.100.2，然后192.168.100.2发送了一个SYN和ACK给192.168.100.1，再然后192.168.100.1发送了ACK给192.168.100.2

    * ###### OSPFv3_with_AH(Protocol OSPF)

        IPV6

    * ###### PPP_EAP(Point-to-Point Protocol)

        这个里面协议有点多啊 PPP LCP，EAP，PPP IPCP， PPP CDPCP, CDP

    * ###### PPP_negotiation(Point-to-Point Protocol)

        PPP LCP, PPP CHAP, PPP IPCP, PPP CDPCP, CDP, ICMP

    * ###### RADIUS(Protocol RADIUS)

        看见了UDP

* #### Cisco-proprietary思科专有



* #### Encryption加密

* #### Management管理

* #### MPLS

* #### Multicast组播

* #### Redundancy冗余

* #### Routing Protocols路由协议

* #### Switching交换机

* #### Tunneling通道

* #### Web

    * ###### HTTP

        分析一个GET logo.png的请求

        * get logo.png的路径

        * User-Agent

        * Accept

        * Host

        * Connection

        分析一个Get logo.png的响应

        * HTTP1.0(Response Version) 200(Status Code) ok(Response)

        * Server: nginx

        * Date

        * Content-Type

        * Content-Length 

        * Last-Modified
        
        * Connection 

        * Keep-Alive

        * Expires

        * Cache-Control

        * Vary

        * Accept-Ranges

        * File Data





## 协议浏览

* #### AH

* #### ARP

* #### Auto-RP

* #### BGP

* #### BOOTP

* #### CDP

* #### CDPCP

* #### CHAP

* #### DEC_DNA

* #### DNS

* #### DTP

* #### DVMRP

* #### EAP

* #### EAPoL

* #### EIGRP

* #### ESP

* #### Ethernet

* #### Frame Relay

* #### GLBP

* #### GRE

* #### HDLC

* #### HSRP

* #### HTTP

* #### ICMP

* #### ICMPv6

* #### IGMP

* #### IP

* #### IPCP

* #### IPV6CP

* #### IPv6

* #### ISAKMP

* #### ISIS

* #### ISL

* #### L2TP

* #### LACP

* #### LCP

* #### LDP

* #### LLC

* #### LLDP

* #### LMI

* #### LOOP

* #### MPLS

* #### MSDP

* #### NBNS

* #### NBSS

* #### NHRP

* #### OCSP

* #### OSPF

* #### PAGP

* #### PAP

* #### PIM

* #### PPP

* #### PPPOED

* #### PPPOES

* #### Q933

* #### RADIUS

* #### RIP

* #### SLARP

* #### SNMP

* #### SSH

* #### SSL

* #### STP

* #### TACACS+

* #### TCP

* #### TDP

* #### Telnet

* #### UDLD

* #### UDP

* #### VLAN

* #### VRRP

* #### VTP

* #### WCCP