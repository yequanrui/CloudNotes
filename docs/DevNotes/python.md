# Python自动化脚本

## 自动化文件管理

### 排序目录中的文件

```python
# 用于根据文件扩展名对目录中的文件进行排序，并将文件移动到适当的子目录中
import os
from shutil import move

def sort_files(directory_path):
  for filename in os.listdir(directory_path):
    if os.path.isfile(os.path.join(directory_path, filename)):
      file_extension = filename.split('.')[-1]
      destination_directory = os.path.join(directory_path, file_extension)  
      if not os.path.exists(destination_directory):
        os.makedirs(destination_directory)
      move(os.path.join(directory_path, filename), os.path.join(destination_directory, filename))
```

### 删除空文件夹

```python
# 用于在指定目录中搜索和删除空文件夹
import os

def remove_empty_folders(directory_path):
  for root, dirs, files in os.walk(directory_path, topdown=False):
    for folder in dirs:
      folder_path = os.path.join(root, folder)
      if not os.listdir(folder_path):
        os.rmdir(folder_path)
```

### 批量重命名文件

```python
# 用于批量重命名目录中的文件
import os

def rename_files(directory_path, old_name, new_name):
  for filename in os.listdir(directory_path):
    if old_name in filename:
      new_filename = filename.replace(old_name, new_name)
      os.rename(os.path.join(directory_path, filename), os.path.join(directory_path, new_filename))
```

## 使用Python进行网页抓取

### 从网站中提取数据

```python
# 利用requests和BeautifulSoup库来抓取网站的数据
import requests
from bs4 import BeautifulSoup

def scrape_data(url):
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')
  # 在此处编写代码，从网站中提取相关数据
```

### 批量下载图片

```python
# Python脚本,用于从网站批量下载图片
import requests

def download_images(url, save_directory):
  response = requests.get(url)
  if response.status_code == 200:
    images = response.json() # 假设API返回图片URL的JSON数组
    for index, image_url in enumerate(images):
      image_response = requests.get(image_url)
      if image_response.status_code == 200:
        with open(f"{save_directory}/image_{index}.jpg", "wb") as f:
          f.write(image_response.content)
```

### 自动提交表单

```python
# 使用POST请求以表单数据自动在网站上提交表单
import requests

def submit_form(url, form_data):
  response = requests.post(url, data=form_data)
  if response.status_code == 200:
    # 在此处编写代码以处理表单提交后的响应
```

## 文本处理和操作

### 统计文本文件中的单词数

```python
# 读取文本文件并统计其中包含的单词数

def count_words(file_path):
  with open(file_path, 'r') as f:
    text = f.read()
    word_count = len(text.split())
  return word_count
```

### 查找和替换文本

```python
# 在文件中搜索特定文本并将其替换为所需文本

def find_replace(file_path, search_text, replace_text):
  with open(file_path, 'r') as f:
    text = f.read()
    modified_text = text.replace(search_text, replace_text)
  with open(file_path, 'w') as f:    
    f.write(modified_text)
```

### 生成随机文本

```python
# 生成指定长度的随机文本
import random
import string

def generate_random_text(length):
  letters = string.ascii_letters + string.digits + string.punctuation  
  random_text = ''.join(random.choice(letters) for i in range(length))
  return random_text
```

## 自动发送电子邮件

### 发送个性化电子邮件

```python
# 用于向收件人列表发送个性化电子邮件，可以自定义发件人的电子邮件、密码、主题、正文以及收件人列表

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_personalized_email(sender_email, sender_password, recipients, subject, body):

  server = smtplib.SMTP('smtp.gmail.com', 587)
  server.starttls()
  server.login(sender_email, sender_password)

  for recipient_email in recipients:
    message = MIMEMultipart()  
    message['From'] = sender_email
    message['To'] = recipient_email
    message['Subject'] = subject  
    message.attach(MIMEText(body, 'plain'))
    server.sendmail(sender_email, recipient_email, message.as_string())

  server.quit()
```

### 发送带附件的电子邮件

```python
# 用于发送带有附件的电子邮件，只需提供发件人的电子邮件、密码、收件人的电子邮件、主题、正文以及要附加的文件的路径即可
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

def send_email_with_attachment(sender_email, sender_password, recipient_email, subject, body, file_path):

  server = smtplib.SMTP('smtp.gmail.com', 587)
  server.starttls()
  server.login(sender_email, sender_password)

  message = MIMEMultipart()
  message['From'] = sender_email
  message['To'] = recipient_email
  message['Subject'] = subject

  message.attach(MIMEText(body, 'plain'))

  with open(file_path, "rb") as attachment:
    part = MIMEBase('application', 'octet-stream')
    part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header('Content-Disposition', f"attachment; filename= {file_path}")
    message.attach(part)

  server.sendmail(sender_email, recipient_email, message.as_string())
  server.quit()
```

### 自动电子邮件提醒

```python
# 基于指定日期发送自动电子邮件提醒
import smtplib  
from email.mime.text import MIMEText
from datetime import datetime, timedelta

def send_reminder_email(sender_email, sender_password, recipient_email, subject, body, reminder_date):

  server = smtplib.SMTP('smtp.gmail.com', 587)
  server.starttls()
  server.login(sender_email, sender_password)

  now = datetime.now()
  reminder_date = datetime.strptime(reminder_date, '%Y-%m-%d')

  if now.date() == reminder_date.date():

    message = MIMEText(body, 'plain')
    message['From'] = sender_email  
    message['To'] = recipient_email
    message['Subject'] = subject

    server.sendmail(sender_email, recipient_email, message.as_string())

  server.quit()
```

## 自动化Excel电子表格

### 读写Excel

```python
# 使用pandas库从Excel电子表格中读取数据并将数据写入新的Excel文件
import pandas as pd

def read_excel(file_path):
  df = pd.read_excel(file_path)
  return df

def write_to_excel(data, file_path):
  df = pd.DataFrame(data)
  df.to_excel(file_path, index=False)
```

### 数据分析和可视化

```python
# 使用pandas和matplotlib库执行数据分析和可视化
import pandas as pd
import matplotlib.pyplot as plt

def analyze_and_visualize_data(data):

  # 在此处编写数据分析和可视化的代码

  pass
```

### 合并多个表格

```python
# 合并Excel文件中多个表的数据到一个表中
import pandas as pd

def merge_sheets(file_path, output_file_path):

  xls = pd.ExcelFile(file_path)
  df = pd.DataFrame()

  for sheet_name in xls.sheet_names:
    sheet_df = pd.read_excel(xls, sheet_name)
    df = df.append(sheet_df)
  
  df.to_excel(output_file_path, index=False)
```

## 与数据库交互

### 连接数据库

```python
# 用于连接SQLite数据库并执行查询
import sqlite3

def connect_to_database(database_path):
  connection = sqlite3.connect(database_path)
  return connection

def execute_query(connection, query):
  cursor = connection.cursor()
  cursor.execute(query)
  result = cursor.fetchall()
  return result
```

### 执行SQL查询

```python
# 用于在数据库上执行SQL查询
import sqlite3

def execute_query(connection, query):

  cursor = connection.cursor()
  cursor.execute(query)  
  result = cursor.fetchall()

  return result
```

### 数据备份和恢复

```python
# 允许你创建数据库的备份并在需要时进行恢复
import shutil

def backup_database(database_path, backup_directory):
  shutil.copy(database_path, backup_directory) 

def restore_database(backup_path, database_directory):
  shutil.copy(backup_path, database_directory)
```

## 自动化系统任务

### 管理系统进程

```python
# 使用psutil库来管理系统进程，允许检索运行进程的列表并通过名称终止指定的进程
import psutil

def get_running_processes():

  return [p.info for p in psutil.process_iter(['pid', 'name', 'username'])]

def kill_process_by_name(process_name):

  for p in psutil.process_iter(['pid', 'name', 'username']):
    if p.info['name'] == process_name:
      p.kill()
```

### 使用Cron安排任务

```python
# 利用crontab库使用cron语法来调度任务，支持以正则间隔或特定时间自动执行特定命令

from crontab import CronTab

def schedule_task(command, schedule):

  cron = CronTab(user=True)
  job = cron.new(command=command)
  job.setall(schedule)
  cron.write()
```

### 监控磁盘空间

```python
# 用于监控磁盘空间并在空间不足时发送警告
import psutil

def check_disk_space(minimum_threshold_gb):

  disk = psutil.disk_usage('/')
  free_space_gb = disk.free / (2**30) # 将字节转换为GB

  if free_space_gb < minimum_threshold_gb:
    
    # 在此处编写代码以发送警告(电子邮件、通知等)

    pass
```

## 网络自动化

### 检查网站状态

```python
# 通过向提供的URL发送HTTP GET请求来检查网站的状态
import requests

def check_website_status(url):

  response = requests.get(url)

  if response.status_code == 200:

    # 在此处编写代码以处理成功的响应

  else:

    # 在此处编写代码以处理不成功的响应
```

### 自动化FTP传输

```python
# 使用FTP协议自动化文件传输

from ftplib import FTP  

def ftp_file_transfer(host, username, password, local_file_path, remote_file_path):

  with FTP(host) as ftp:
    ftp.login(user=username, passwd=password)
    with open(local_file_path, 'rb') as f:
      ftp.storbinary(f'STOR {remote_file_path}', f)
```

### 网络设备配置

```python
# 使用netmiko库自动配置网络设备

from netmiko import ConnectHandler

def configure_network_device(host, username, password, configuration_commands):

  device = {
    'device_type': 'cisco_ios',  
    'host': host,
    'username': username,
    'password': password,
  }

  with ConnectHandler(device) as net_connect:
    net_connect.send_config_set(configuration_commands)
```

## 数据清理和转换

### 从数据中删除重复项

```python
# 使用pandas从数据集中删除重复行

import pandas as pd

def remove_duplicates(data_frame):

  cleaned_data = data_frame.drop_duplicates()

  return cleaned_data
```

### 数据规范化

```python
# 使用最小-最大规范化技术对数据进行规范化
import pandas as pd

def normalize_data(data_frame):

  normalized_data = (data_frame - data_frame.min()) / (data_frame.max() - data_frame.min())

  return normalized_data
```

### 处理缺失值

```python
# 使用pandas处理数据集中的缺失值
import pandas as pd

def handle_missing_values(data_frame):

  filled_data = data_frame.fillna(method='ffill')

  return filled_data
```

## 自动化PDF操作

### 从PDF中提取文本

```python
# 使用PyPDF2库从PDF文件中提取文本
import PyPDF2

def extract_text_from_pdf(file_path):

  with open(file_path, 'rb') as f:
    pdf_reader = PyPDF2.PdfFileReader(f)
    text = ''
    for page_num in range(pdf_reader.numPages):
      page = pdf_reader.getPage(page_num)
      text += page.extractText()

  return text
```

### 合并多个PDF

```python
# 用于将多个PDF文件合并为一个PDF文档
import PyPDF2

def merge_pdfs(input_paths, output_path):

  pdf_merger = PyPDF2.PdfMerger()

  for path in input_paths:
    with open(path, 'rb') as f: 
      pdf_merger.append(f)

  with open(output_path, 'wb') as f:
    pdf_merger.write(f)
```

### 添加密码保护

```python
# 用于为PDF文件添加密码保护
import PyPDF2

def add_password_protection(input_path, output_path, password):

  with open(input_path, 'rb') as f:
    pdf_reader = PyPDF2.PdfFileReader(f)
    pdf_writer = PyPDF2.PdfFileWriter()
    for page_num in range(pdf_reader.numPages):
      page = pdf_reader.getPage(page_num)
      pdf_writer.addPage(page)
    pdf_writer.encrypt(password)
    with open(output_path, 'wb') as output_file:
      pdf_writer.write(output_file)
```
