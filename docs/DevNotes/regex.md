> Notes for Regular Expression

1. 提取连续重复的字符

    ```javascript
    const collectRepeatStr = (str) => {
      let repeatStrs = [];
      const repeatRe = /(.+)\1+/g;
      str.replace(repeatRe, ($0, $1) => {
        $1 && repeatStrs.push($1);
      })
      return repeatStrs;
    }
    ```

2. 实现一个trim函数

    ```javascript
    // 去除空格法
    const trim = (str) => {
      return str.replace(/^\s*|\s*$/g, '');
    }

    // 提取非空格法
    const trim = (str) => {
      return str.replace(/^\s*(.*?)\s*$/g, '$1');
    }
    ```

3. 数字价格千分位分割

    ```javascript
    '123456789'.replace(/(?!^)(?=(\d{3})+$)/g, ','); // 123,456,789
    ```

4. 手机号3-4-4分割

    ```javascript
    let mobile = '18379836654';
    let mobileReg = /(?=(\d{4})+$)/g;
    console.log(mobile.replace(mobileReg, '-')); // 183-7983-6654
    ```

5. 将字符串驼峰化

    ```javascript
    const camelCase = (string) => {
      const camelCaseRegex = /[-_\s]+(.)?/g;
      return string.replace(camelCaseRegex, (match, char) => {
        return char ? char.toUpperCase() : '';
      });
    }
    ```

6. 将字符串首字母转化为大写，剩下为小写

    ```javascript
    const capitalize = (string) => {
      const capitalizeRegex = /(?:^|\s+)\w/g;
      return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase());
    }
    ```

7. 通过name获取url query参数

    ```javascript
    const getQueryByName = (name) => {
      const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`);
      const queryNameMatch = window.location.search.match(queryNameRegex);
      // 一般都会通过decodeURIComponent解码处理
      return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : '';
    }
    ```

8. 电子邮件

    ```javascript
    const reg1 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
    const reg2 = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    let str = 'yequanrui@qq.com';
    console.log(reg1.test(str)); // true
    console.log(reg2.test(str)); // true
    ```

9. 密码

    ```javascript
    // 第一个字符必须是字母
    // 必须包含至少8个字符且不超过20个字符
    // 不能使用除字母、数字和下划线以外的字符
    const reg1 = /^[a-zA-Z]\w{8,20}$/g;
    // 至少8个字符
    // 至少1个数字字符
    // 至少1个小写字母
    // 至少1个大写字母
    // 至少1个特殊字符
    const reg2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/g;
    ```

10. 网址

    ```javascript
    // 检查字符串是否为URL
    const reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/g;
    ```

11. IP地址

    ```javascript
    // IPv4
    const reg1 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    // IPv6
    const reg2 = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/g;
    ```

12. 日期

    ```javascript
    // 日期格式YYYY-MM-dd使用分隔符（-）
    const reg1 = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g;
    // 日期格式dd-MM-YYYY使用分隔符（- . /）
    const reg2 = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
    ```

13. HTML标签

    ```javascript
    // 将HTML标记与属性匹配
    const reg = /<\/?[\w\s]*>|<.+[\W]>/g;
    console.log(reg.test('<html>')); // true
    console.log(reg.test('<div class"test">')); // true
    console.log(reg.test('</div>')); // true
    console.log(reg.test('<ss/div>')); // false
    console.log(reg.test('<div')); // false
    ```

14. 电话号码

    ```javascript
    // 将HTML标记与属性匹配
    const reg = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g;
    console.log(reg.test('123-456-7890')); // true
    console.log(reg.test('(123) 456-7890')); // false
    console.log(reg.test('123 456 7890')); // true
    console.log(reg.test('123.456.7890')); // false
    console.log(reg.test('+91 (123) 456-7890')); // true
    ```
