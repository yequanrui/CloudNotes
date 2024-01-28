# Git命令

```bash
# 初始化本地存储库，directory不指定，将使用当前目录
git init {directory}

# 克隆公共存储库
git clone {https_repo_url}
# 克隆私有存储库
git clone {ssh_repo_url}

# 添加文件到暂存区
# 将file1和file2添加到暂存区
git add {file1} {file2}
# 将当前目录中的所有JS文件添加到暂存区
git add *.js
# 将所有新的和更改的文件添加到暂存区
git add -A
git add .

# 移动或重命名文件（或文件夹）
git mv {source_path} {target_path}

# 显示当前HEAD上的最近一次的提交
git show

# 从暂存区中删除所有文件
git reset
# 从暂存区中删除文件
git reset {file_name}

# 从存储库中删除文件（或文件夹）
git rm -r {file_name}
# 仅从暂存区中删除
git rm --cached {file_name}

# 检查状态
git status

# 将暂存区域中准备好的更改保存到本地存储库
git commit -m "{commit_message}"
# 添加对跟踪文件所做的所有更改并提交
git commit -am "{commit_message}"
# 修改未推送的提交信息
git commit --amend --only -m "{commit_message}"
# 修改单个提交里的用户名和邮箱
git commit --amend --author "NewAuthorName <myemail@mydomain.com>"

# 将所有本地分支提交上传到相应的远程分支
git push
# 如果你之前没有设置远程仓库，那么你需要设置它
git remote add origin {repo_url}
git branch -M main
git push -u origin main

# 从远程存储库中获取更改
git fetch {remote_name}
# 从特定分支获取更改
git fetch {remote_name} {branch_name}

# 尝试在获取提交后自动合并到您当前活动的分支中
git pull
# 从远程分支中获取提交后自动合并到您当前活动的分支中
git pull {remote_name} {branch_name}

# 分支列表
# 星号表示当前分支
# -a：显示所有分支（本地和远程）
# -r：显示远程分支
# -v：显示最后一次提交的分支
git branch
# 创建一个新分支
git branch {branch_name}
# 删除一个分支
git branch -d {branch_name}
# 强行删除一个分支
git branch -D {branch_name}
# 重命名本地分支
git branch -m {old_branch_name} {new_branch_name}

# 创建一个新分支并切换到它
git checkout -b {branch_name}
# 克隆一个远程分支并切换到它
git checkout -b {branch_name} origin/{branch_name}
# 切换到分支
git checkout {branch_name}
# 切换到上次签出的分支
git checkout -
# 放弃对文件的更改
git checkout -- {file_name}
# 查看之前的提交
git checkout {commit_id}

# 恢复提交更改
git revert {commit_id}

# 重置提交更改
git reset {commit_id}
# 强制重置提交更改
git reset --hard {commit_id}

# 将分支合并到活动分支中
git merge {branch_name}
# 将一个分支合并到一个目标分支
git merge {source_branch} {target_branch}

# 变基分支，将一系列提交移动或组合到新的基本提交的过程
git rebase {branch_name}

# 将更改存储在脏工作目录中
git stash
# 将消息添加到存储中
git stash save "{message}"
# 列出存储的更改
git stash list
# 显示存储中的更改
git stash show {stash_id}
# 应用存储，不指定{stash_id}，将应用最新的stash
git stash apply {stash_id}
# 应用和删除存储
git stash pop {stash_id}
# 删除存储中的更改
git stash drop {stash_id}
# 删除所有存储的条目
git stash clear

# 将更改推送到远程存储库（记住的分支）
git push
# 将分支推送到您的远程存储库
git push {remote_name} {branch_name}
# 将更改推送到远程存储库（并记住分支）
git push -u {remote_name} {branch_name}
# 删除远程分支
git push {remote_name} --delete {branch_name}

# 显示远程仓库
git remote
# 显示远程存储库的URL
git remote -v
# 设置存储库的源地址
git remote set-url {remote_name} {repo_url}
# 添加远程存储库
git remote add {remote_name} {repo_url}
# 重命名远程存储库
git remote rename {old_remote_name} {new_remote_name}
# 删除远程仓库
git remote remove {remote_name}

# 查看更改
git log
# 查看更改（详细）
git log --summary
# 查看更改（简要）
git log --oneline
# 当前HEAD上的最近一次的提交
git log -n1 -p

# 显示对未暂存文件的更改
git diff
# 显示对暂存文件的更改
git diff --staged
# 显示两次提交之间的变化
git diff {commit_id_1} {commit_id_2}
# 显示两个分支之间的变化
git diff {source_branch} {target_branch}

# 获取全局配置
git config --global --list
# 全局设置用户名
git config --global user.name "user_name"
# 全局设置电子邮件
git config --global user.email "email_address"
```
