### 使用nrm快速切换npm源

> nrm是一个npm源管理工具，使用它可以快速切换npm源
>
> 主要可以用于切换npm源为taobao镜像，由于npm是国外的，安装依赖时速度比较慢，可以切换为taobao镜像，安装速度就会比较快，也不会出错

1. 使用`npm install -g nrm`安装工具
2. 安装完后使用`nrm -V`查看版本
3. 如果报错：

    ```bash
    internal/validators.js:124
        throw new ERR_INVALID_ARG_TYPE(name, 'string', value);
        ^
    [TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received undefined
      at validateString (internal/validators.js:124:11)
      at Object.join (path.js:375:7)
      at Object.<anonymous> (C:\Users\yequanrui\AppData\Roaming\npm\node_modules\nrm\cli.js:17:20)
      at Module._compile (internal/modules/cjs/loader.js:1063:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
      at Module.load (internal/modules/cjs/loader.js:928:32)
      at Function.Module._load (internal/modules/cjs/loader.js:769:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
      at internal/main/run_main_module.js:17:47
    ] {
      code: 'ERR_INVALID_ARG_TYPE'
    }
    ```

4. 根据报错信息，找到cli.js文件夹，修改17行，即可解决报错：

    ```bash
    //const NRMRC = path.join(process.env.HOME, '.nrmrc'); (删除)
    const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
    ```

5. 使用`nrm ls`查看所有源，列表中左侧为名称，右侧为地址，带*的为当前配置
6. 使用`nrm use [name]`切换源
7. 这时就可以使用npm安装依赖了

### npm更换成淘宝镜像源以及cnpm

> 这是一个完整`npmjs.org`镜像，你可以用此代替官方版本(只读)，同步频率目前为10分钟一次以保证尽量与官方服务同步。

1. 使用阿里定制的`cnpm`命令行工具代替默认的`npm`

    ```bash
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

2. 检测`cnpm`版本信息

    ```bash
    cnpm -v
    ```

3. 使用`cnpm`安装依赖

    ```bash
    cnpm install [name]
    ```
