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
