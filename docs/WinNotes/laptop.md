### 查看笔记本电池容量

1. 按住`Win+X`组合键或右击开始菜单，选择`Windows 终端（管理员）`
2. 输入`powercfg /batteryreport /output "C:\battery.html"`，回车
3. 查看`battery.html`，`DESIGN CAPACITY`就是笔记本出厂的容量，`FULL CHARGE CAPACITY`就是目前剩余容量
