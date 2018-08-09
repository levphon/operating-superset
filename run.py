# -*- encoding: utf-8 -*-
'''
@Author  :    huangzz
@License :   (C) Copyright 2013-2017, 广联赛讯
@Contact :   huangzz@didihu.com.cn
@Software:   PyCharm
@File    :   run.py.py
@Time    :   2018/5/3 14:50
@Desc    :
'''

from superset import app
app.jinja_env.auto_reload = True
app.run(debug=True, host='0.0.0.0', port=8088)