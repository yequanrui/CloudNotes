# 使用git filter-repo、BFG Repo-Cleaner轻松搞定仓库代码瘦身

> 由于仓库使用时间久了，日志变的非常大，严重影响了团队的开发效率
>
> 要从历史记录中彻底删除不需要的文件，可以使用[git filter-repo]或[BFG Repo-Cleaner]工具，[点击查看官方文档][github-doc]

[git filter-repo]: https://github.com/newren/git-filter-repo '点击跳转主页'

[BFG Repo-Cleaner]: https://rtyley.github.io/bfg-repo-cleaner/ '点击跳转主页'

[github-doc]: https://docs.github.com/zh/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository

## git filter-repo

### 快速使用

```shell
# 查看历史大文件
git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"
# 从历史中删除 target/ 这个文件夹
git filter-branch --force --index-filter 'git rm -r  --cached --ignore-unmatch target/' --prune-empty --tag-name-filter cat -- --all
# 执行仓库压缩
git gc --prune=now
# 推送到远程仓库
git push origin --force --all
```

### 详细说明

1. 显示历史记录过的所有文件

    示例中的命令是用来显示历史中体积最大的5个文件

    `git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')"`

    有点Shell脚本基础的同学应该很容易看出来，主要就是`git ref-list`命令

    `git rev-list --objects --all`

    后面是筛选与排序，当你对项目的结构非常了解的时候，你大可不用排序，直接跳过这一步

2. 从历史中删除文件引用

    这一步是核心步骤，把文件/文件夹从历史中删除，示例命令删除的是`target/`目录，如果读者想要删除其他文件/文件夹，例如删除`readme.md`文件，可以改写成

    `git filter-branch --force --index-filter 'git rm -r  --cached --ignore-unmatch readme.md' --prune-empty --tag-name-filter cat -- --all`

    这个命令的主要核心是`git filter-branch`，次要核心是`git rm`，`git rm`的用法和shell脚本里的删除命令`rm`是一样的，`-r`参数是因为删除的内容是文件夹才要加，表示递归删除，如果你只是要删除文件，那大可不加`-r`

    顺便提一下，如果你删除的文件夹是目前还在使用的，那也会被删除，我就不小心把我src/main/webapp文件夹删除了, 还好我有克隆到其他文件夹备份，文件可以快速找回来

3. 触发垃圾回收，删除没有被引用的文件

    这一个步骤是真正让仓库缩小的命令，上一步只是删除了引用，是逻辑结构上的删除，而这一步是删除文件，从物理上减少了磁盘空间使用，如果你了解一些虚拟机的话，你肯定知道我在说什么

    示例中使用的`--prune`参数是时间，如果你想了解具体的参数规则，可以去`git-scm.com`找找官方文档

    `git gc --prune=now`

4. 同步到远程仓库

    执行完以上所有步骤后，只是本地仓库瘦身了，而远程仓库并没有，所以需要推到远程仓库，核心命令是`git push`

    `git push origin --force --all`

    参数`origin`是远程仓库地址别名，具体请参照`git remote`命令

    参数`--force`是强制推送，这个参数表示强行覆盖远程仓库，这个参数跟TNT炸药一样不能乱用，它可以简写为`-f`

    参数`--all`表示所有历史都要覆写，当然我不知道这里的“全部”是多少，教程里还提到了再提交一次`tags`的

    `git push origin --force --tags`

    这样可以把打了`tag`的提交也改变历史

## BFG Repo-Cleaner

> 使用此工具，需要先安装Java环境

```shell
git clone --mirror https://gitee.com/****/vue-all.git
java -jar bfg.jar --delete-folders vue3 vue-all.git
cd vue-all.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push
```

这种工具速度就快多了，但是他不会把文件夹和里面的内容删除，会保留最新的一次提交，而且也不能指定删除某个文件夹里面的东西
